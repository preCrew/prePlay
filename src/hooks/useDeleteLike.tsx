import { db } from '@src/firebaseConfig';
import {
  doc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import useGetLike from './useGetLike';
import useIsLogin from './user/useIsLogin';

const useDeleteLike = async (id: string) => {
  try {
    const commentRef = collection(db, 'like');
    const q = query(commentRef, where('data.id', '==', `${id}`));

    const querySnapshot = await getDocs(q);
    let deleteValue;

    querySnapshot.forEach(doc => {
      deleteValue = doc.id;
    });

    if (deleteValue) {
      await deleteDoc(doc(db, 'like', deleteValue));
    }
  } catch (err) {}
};

export default (id: string) => {
  const me = useIsLogin();
  const queryClient = useQueryClient();
  const { refetch: refetchGetLike } = useGetLike(id, me);

  return useMutation((id: string) => useDeleteLike(id), {
    onSuccess: (data, variable) => {
      console.log('삭제', data);
      refetchGetLike();
      // console.log(data, variable);
      // queryClient.invalidateQueries();
      // queryClient.invalidateQueries(['like', variable]);
    },
    onError: err => {
      console.log(err);
    },
  });
};
