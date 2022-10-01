import { db } from '@src/firebaseConfig';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { doc, getDoc, writeBatch } from 'firebase/firestore';

export interface TFirebaseSongSetting {
  lastIdx: number;
  nextPageToken: string;
}
const getSongs = async (isFirstQuery: boolean, query: string) => {
  // 1. firestore에서 현재 노래의 카운트 갯수, 다음 페이지 토큰을 가져옴
  const docRef = doc(db, 'settings', 'token');
  const docSnap = await getDoc(docRef);
  const settings = docSnap.exists() ? docSnap.data() : {};

  const batch = writeBatch(db);
  let res: any;

  try {
    const url =
      settings.nextPageToken && !isFirstQuery
        ? `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=50&pageToken=${settings.nextPageToken}&regionCode=kr&type=video&videoCategoryId=10&key=${process.env.YOUTUBE_API_KEY}`
        : `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=50&regionCode=kr&type=video&videoCategoryId=10&key=${process.env.YOUTUBE_API_KEY}`;

    res = await axios.get(url);

    const items = res.data.items;
    for (let idx = 0; idx < items.length; idx++) {
      const nowIdx = idx + (settings.lastIdx ?? 1);
      const item = {
        id: items[idx].id.videoId,
        title: items[idx].snippet.title.replaceAll('&#39', ''),
        thumnail: items[idx].snippet.thumbnails.medium.url,
      };
      batch.set(doc(db, 'songs', nowIdx.toString()), item);
    }

    const request: TFirebaseSongSetting = {
      lastIdx: (settings.lastIdx ?? 1) + 50,
      nextPageToken: res.data.nextPageToken,
    };
    batch.set(doc(db, 'settings', 'token'), request);
    await batch.commit();

    return request;
  } catch (e) {
    return `set Songs Error: ${e}`;
  }
};

export default (isAnotherQuery: boolean, query: string) =>
  useMutation(() => getSongs(isAnotherQuery, query), {
    cacheTime: Infinity,
  });
