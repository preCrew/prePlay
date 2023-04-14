import { db } from '@src/firebaseConfig';
import { useAppSelector } from '@src/store/store';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { doc, DocumentData, getDoc } from 'firebase/firestore';

export interface TSongLists {
  id: string;
  thumnail: string;
  title: string;
}
const getSongLists = async (startIdx: number, lists: number[]) => {
  const result: TSongLists[] = [];

  if (lists.length > 0) {
    for (let idx = startIdx; idx < startIdx + 12; idx++) {
      const docSnap = await getDoc(doc(db, 'songs', lists[idx].toString()));

      if (!docSnap.exists()) {
        throw `받아올 문서가 존재하지 않음: ${lists[idx]}`;
      } else {
        //docId.push(docSnap.id);
        result.push(docSnap.data() as DocumentData as TSongLists);
      }
    }
  }

  return {
    pageLists: result,
    currentPage: startIdx + 12,
    isLast: startIdx + 12 >= lists.length,
  };
};

export default (startIdx = 0, lists: number[]) =>
  useInfiniteQuery(['songLists'], () => getSongLists(startIdx, lists), {
    cacheTime: Infinity,
    suspense: true,
    getNextPageParam: lastPage => {
      if (lastPage.isLast) return undefined;
      return getSongLists(lastPage.currentPage, lists);
    },
  });
