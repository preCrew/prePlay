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
}

export interface Tlikenum {
  postId: string;
}

const useGetLikeNum = async ({ postId }: Tdata) => {
  const likeData: Tlikenum[] = [];
  try {
    const likeRef = collection(db, 'like');

    const doc = query(likeRef, where('postId', '==', postId));

    const querySnapshot = await getDocs(doc);
    //console.log(querySnapshot.size);
    // querySnapshot.forEach(doc => {
    //   likeData.push(doc.data() as Tlikenum);
    // });

    return querySnapshot.size;
  } catch (error) {
    throw error;
  }
};

export default (postId: string) =>
  useQuery(['likenum', postId], () => useGetLikeNum({ postId }), {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
