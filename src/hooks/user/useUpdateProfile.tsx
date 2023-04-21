import useUser from '@src/store/hooks/useUser';
import { useMutation } from '@tanstack/react-query';
import { getAuth, updateProfile, User } from 'firebase/auth';

const useUpdateProfile = async (nickname: string) => {
  const auth = getAuth();

  try {
    await updateProfile(auth.currentUser as User, {
      displayName: nickname,
      //photoURL: 'https://example.com/jane-q-user/profile.jpg',
    });

    return nickname;
  } catch (err) {
    throw err;
  }
};

export default () => {
  const { updateNickname } = useUser();

  return useMutation((nickname: string) => useUpdateProfile(nickname), {
    onSuccess: data => {
      console.log(data);
      updateNickname(data);
    },
  });
};
