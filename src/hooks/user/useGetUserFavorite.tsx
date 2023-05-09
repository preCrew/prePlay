import { db } from '@src/firebaseConfig';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { TSongLists } from '../useGetSongListsQuery';

interface TuserFavorite {
  id: string;
  data: TSongLists;
  me: string;
  timestamp?: any;
}
interface Tdata {
  me: string;
  pageParam?: any;
}

const useGetUserFavorite = async ({ me, pageParam }: Tdata) => {
  const userFavoriteData: TuserFavorite[] = [];

  try {
    const ref = collection(db, 'like');

    const doc = query(
      ref,
      orderBy('timestamp'),
      where('me', '==', me),
      startAfter(pageParam.timestamp ?? 0),
      limit(10),
    );

    const querySnapshot = await getDocs(doc);

    querySnapshot.forEach(doc => {
      userFavoriteData.push(doc.data() as TuserFavorite);
    });

    return userFavoriteData;
  } catch (error) {
    throw error;
  }
};

export default (me: string) =>
  useInfiniteQuery(
    ['like'],
    ({ pageParam = 0 }) => useGetUserFavorite({ me, pageParam }),
    {
      cacheTime: Infinity,
      suspense: true,
      getNextPageParam: lastData => {
        if (lastData?.length! < 10) return undefined;
        return lastData?.[lastData.length - 1];
      },
    },
  );
