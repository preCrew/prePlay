import { app } from '@src/firebaseConfig';
import { useQuery } from '@tanstack/react-query';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return (await signInWithPopup(getAuth(app), provider)).user;
};
export default () =>
  useQuery(['userInfo'], loginWithGoogle, {
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
  });
