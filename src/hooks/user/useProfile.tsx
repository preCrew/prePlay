import { app } from '@src/firebaseConfig';
import useUser from '@src/store/hooks/useUser';
import { TuserInfo } from '@src/store/reducers/type/TuserInfo';
import { useQueries, useQuery } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const useProfile = async () => {
  const auth = getAuth();
  try {
    const user = await new Promise<User | null>(resolve => {
      onAuthStateChanged(auth, resolve);
    });

    if (user) {
      const data = {
        email: user.email,
        uid: user.uid,
        nickname: user.displayName,
      };
      return data;
    } else {
      throw new Error('');
    }
  } catch (error) {
    throw error;
  }
};

export default () => {
  const { getUserInfo } = useUser();

  return useQuery(['profile'], () => useProfile(), {
    staleTime: 500000,
    onSuccess: (data: TuserInfo) => {
      // console.log(data);
      getUserInfo(data);
    },
  });
};
