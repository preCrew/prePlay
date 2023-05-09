import { FormEvent, useCallback, useState } from 'react';

import UserButton from '@src/components/Common/Button/UserButton';
import useProfile from '@src/hooks/user/useProfile';
import useUpdateProfile from '@src/hooks/user/useUpdateProfile';
import TopBar from '@src/components/Common/TobBar';

const Profile = () => {
  const { data } = useProfile();
  const { mutate, isSuccess } = useUpdateProfile();

  const [nickname, setNickname] = useState('');

  const onchangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmitNickName = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      mutate(nickname);
    },
    [nickname],
  );

  if (isSuccess) alert('닉네임이 등록되었습니다.');

  return (
    <>
      <TopBar />
      <form
        onSubmit={onSubmitNickName}
        className="flex flex-col items-center justify-center h-[20vh] p-basic-top"
      >
        <input
          type="text"
          value={nickname}
          onChange={onchangeNickName}
          placeholder="닉네임을 입력해주세요."
          className="w-11/12 py-2 border-b border-gray-400"
        />
        <button className="w-4/12 p-3 mt-5 text-sm text-white border rounded-[30px] bg-primary1 border-primary1">
          수정
        </button>
      </form>
    </>
  );
};

export default Profile;
