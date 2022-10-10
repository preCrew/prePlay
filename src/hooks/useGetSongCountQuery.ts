import { db } from '@src/firebaseConfig';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

const getCount = async () => {
  try {
    const docSnap = await getDoc(doc(db, 'settings', 'token'));
    return docSnap.data()?.lastIdx as number;
  } catch (e) {
    throw new Error('Error getting count');
  }
};

export default () => useQuery(['getSongCount'], getCount);
