import { db } from '@src/firebaseConfig';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { doc, getDoc, writeBatch } from 'firebase/firestore';

export interface TFirebaseSongSetting {
  lastIdx: number;
  nextPageToken: string;
}
const getSongs = async (isAnotherQuery: boolean, query: string) => {
  // 1. firestore에서 현재 노래의 카운트 갯수, 다음 페이지 토큰을 가져옴
  const docRef = doc(db, 'settings', 'token');
  const docSnap = await getDoc(docRef);
  const settings = docSnap.exists() ? docSnap.data() : {};

  const batch = writeBatch(db);
  let res: any;

  try {
    // 만약 nextPageToken이 있다면(1번이상 받아온적이 있다면), 다른 쿼리로 검색하는게 아니라면
    // ? 유튜브에서 nextpagetoken을 이용해 다음 페이지의 데이터를 가져옴
    // : 유튜브에서 데이터를 처음부터 가져옴
    const url =
      settings.nextPageToken && !isAnotherQuery
        ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&pageToken=${settings.nextPageToken}&regionCode=kr&type=video&videoCategoryId=10&key=AIzaSyAQBMybP-HCUn6JFqOydwiNU6zkj3wn4K8`
        : `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=kr&type=video&videoCategoryId=10&key=AIzaSyAQBMybP-HCUn6JFqOydwiNU6zkj3wn4K8&q=${query}`;

    res = await axios.get(url);
    console.log(res);

    const items = res.data.items;
    for (let idx = 0; idx < items.length; idx++) {
      const item = {
        count: idx + settings.lastIdx,
        id: items[idx].id.videoId,
        title: items[idx].snippet.title.replaceAll('&#39', ''),
        thumnail: items[idx].snippet.thumbnails.medium.url,
      };
      batch.set(doc(db, 'songs', items[idx].id.videoId), item);
    }

    // - lastIdx를 50 증가시킴
    // - nextPageToken을 가져온 데이터의 nextPageToken으로 변경
    // - firestore의 settings에 lastIdx, nextPageToken을 저장
    const request: TFirebaseSongSetting = {
      lastIdx: settings.lastIdx + 50,
      nextPageToken: res.data.nextPageToken,
    };
    batch.set(doc(db, 'settings', 'token'), request);
    await batch.commit();

    console.log('success');
    return request;
  } catch (e) {
    return `set Songs Error: ${e}`;
    console.log(e);
  }
};

export default (isAnotherQuery: boolean, query: string) =>
  useMutation(() => getSongs(isAnotherQuery, query), {
    cacheTime: Infinity,
    // enable
    // stale
    // staleTime: Infinity,
    // cacheTime: Infinity,
    // enabled: false,
  });
