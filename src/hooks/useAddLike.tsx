import { db } from '@src/firebaseConfig';
import {
  collection,
  addDoc,
  doc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TSongLists } from './useGetSongListsQuery';
import useGetLike from './useGetLike';

interface TLikeData {
  post: TSongLists;
  me: string;
}

const useAddLike = async ({ post, me }: TLikeData) => {
  const likeData: any[] = [];
  let docId;

  try {
    const likeRef = collection(db, 'like');

    const q = query(
      likeRef,
      where('data.id', '==', post.id),
      where('me', '==', me),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      docId = doc.id;
      likeData.push(doc.data());
    });

    //좋아요 없으면 추가
    if (!likeData.length) {
      const docRef = await doc(collection(db, 'like'));
      const id = docRef.id;

      await addDoc(collection(db, 'like'), {
        id,
        me,
        data: post,
        timestamp: new Date(),
      });
    }
  } catch (err) {
    throw err;
  }
};

export default ({ post, me }: TLikeData) => {
  const queryClient = useQueryClient();
  const { refetch: refetchGetLike } = useGetLike(post.id, me);

  const addLike = useMutation(() => useAddLike({ post, me }), {
    onSuccess: data => {
      console.log(data, '추가');
      // 다시 데이터 받아옴
      // queryClient.invalidateQueries();
      refetchGetLike();
      //queryClient.invalidateQueries(['like', post.id]);
    },
    onError: error => {
      console.log(error);
    },
  });

  return addLike;
};
