import { db } from '@src/firebaseConfig';
import { TUser } from '@src/store/reducers/user-Slice';
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
import { useRef, useState } from 'react';

interface Tcomment {
  id: string;
  postId: string;
  text: string;
  me: string;
  timestamp?: any;
}
interface Tdata {
  postId: string;
  pageParam?: any;
}

const useGetComment = async ({ postId, pageParam }: Tdata) => {
  const commentData: Tcomment[] = [];

  try {
    const commentRef = collection(db, 'comment');

    const doc = query(
      commentRef,
      orderBy('timestamp'),
      where('postId', '==', postId),
      startAfter(pageParam.timestamp ?? 0),
      limit(10),
    );

    const querySnapshot = await getDocs(doc);

    querySnapshot.forEach(doc => {
      commentData.push(doc.data() as Tcomment);
    });
    return commentData;
  } catch (error) {
    throw error;
  }
};

export default (postId: string) =>
  useInfiniteQuery(
    ['comments'],
    ({ pageParam = 0 }) => useGetComment({ postId, pageParam }),
    {
      cacheTime: Infinity,
      suspense: true,
      getNextPageParam: lastData => {
        if (lastData?.length! < 10) return undefined;
        return lastData?.[lastData.length - 1];
      },
    },
  );
