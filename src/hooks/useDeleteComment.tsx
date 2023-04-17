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

const useDeleteComment = async (id: string) => {
  try {
    const commentRef = collection(db, 'comment');
    const q = query(commentRef, where('id', '==', `${id}`));

    const querySnapshot = await getDocs(q);
    let deleteValue;

    querySnapshot.forEach(doc => {
      deleteValue = doc.id;
    });

    if (deleteValue) {
      await deleteDoc(doc(db, 'comment', deleteValue));
    }
  } catch (err) {}
};

export default () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => useDeleteComment(id), {
    onSuccess: () => {
      // 등록한 댓글 ui 뿌려주기(다시 데이터 받아옴)
      queryClient.invalidateQueries();
      queryClient.invalidateQueries(['comments']);
    },
    onError: err => {
      console.log(err);
    },
  });
};
