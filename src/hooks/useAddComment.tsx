import { db } from '@src/firebaseConfig';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

interface Tcomment {
  postId: string | undefined;
  me: string;
  text: string;
}

const useAddComment = async ({ postId, me, text }: Tcomment) => {
  try {
    const docRef = await doc(collection(db, 'comment'));
    const id = docRef.id;

    await setDoc(docRef, {
      id,
      me,
      text,
      postId,
      timestamp: new Date(),
    });
  } catch (e) {
    console.log(e);
  }
};
// 현재포스트 확인 -> 그 포스트에 댓글 추가
export default ({ postId, me, text }: Tcomment) => {
  const queryClient = useQueryClient();

  const addComment = useMutation(() => useAddComment({ postId, me, text }), {
    onSuccess: () => {
      // 등록한 댓글 ui 뿌려주기(다시 데이터 받아옴)
      queryClient.invalidateQueries();
      queryClient.invalidateQueries(['comments']);
    },
  });

  return { addComment };
};
