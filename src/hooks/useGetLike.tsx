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

interface Tdata {
  postId: string;
  me: string;
}

export interface Tlike {
  id?: string;
  postId: string;
  me: string;
}

const useGetLike = async ({ postId, me }: Tdata) => {
  const likeData: Tlike[] = [];
  try {
    const likeRef = collection(db, 'like');

    const doc = query(
      likeRef,
      where('postId', '==', postId),
      where('me', '==', me),
    );

    const querySnapshot = await getDocs(doc);

    querySnapshot.forEach(doc => {
      likeData.push(doc.data() as Tlike);
    });

    return likeData;
  } catch (error) {
    throw error;
  }
};

export default (postId: string, me: string) =>
  useQuery(['like', postId], () => useGetLike({ postId, me }), {
    enabled: false,
    onSuccess: () => {},
    onError: error => {
      console.log(error);
    },
  });
