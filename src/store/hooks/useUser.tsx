import { useCallback } from 'react';

import { TuserInfo } from '../reducers/type/TuserInfo';
import {
  updateNicknameAction,
  getUserInfoAction,
} from '../reducers/user-Slice';
import { useAppDispatch } from '../store';

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserInfo = useCallback(
    (info: TuserInfo) => {
      dispatch(getUserInfoAction(info));
    },
    [dispatch],
  );

  const updateNickname = useCallback(
    (nickname: string) => {
      dispatch(updateNicknameAction(nickname));
    },
    [dispatch],
  );

  return { getUserInfo, updateNickname };
};

export default useUser;
