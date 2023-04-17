import { db } from '@src/firebaseConfig';
import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { Tlike } from './useGetLike';

const useAddLike = async ({ postId, me }: Tlike) => {
  const likeData = [];
  let docId;

  try {
    const likeRef = collection(db, 'like');

    const q = query(
      likeRef,
      where('postId', '==', postId),
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
        postId,
      });
    }
  } catch (err) {
    throw err;
  }
};

export default ({ postId, me }: Tlike) => {
  const queryClient = useQueryClient();

  const addLike = useMutation(() => useAddLike({ postId, me }), {
    onSuccess: () => {
      // 다시 데이터 받아옴
      queryClient.invalidateQueries();
      queryClient.invalidateQueries(['like']);
    },
    onError: error => {
      console.log(error);
    },
  });

  return addLike;
};
