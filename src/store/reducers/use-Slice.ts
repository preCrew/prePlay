import { createSlice } from '@reduxjs/toolkit';
import { TLoadingState } from './common.interface';
import { v1 as uuidv1 } from 'uuid';

export interface TUser {
  isLogin: boolean;
  email: string;
  uid: string;
  loadingState: {
    createUser: TLoadingState | Record<string, unknown>;
    loginUser: TLoadingState | Record<string, unknown>;
    logoutUser: TLoadingState | Record<string, unknown>;
    readUserInfo: TLoadingState | Record<string, unknown>;
    updateUserInfo: TLoadingState | Record<string, unknown>;
  };
}

const dummyUserData = (data: number) =>
  Array(data)
    .fill(0)
    .map(() => ({
      id: uuidv1(),
      isLogin: false,
      uid: '',
      loadingState: {
        createUser: {},
        loginUser: {},
        logoutUser: {},
        readUserInfo: {},
        updateUserInfo: {},
      },
      email: '',
    }));
dummyUserData(20);

const initialUserState: TUser = {
  isLogin: false,
  uid: '',
  loadingState: {
    createUser: {},
    loginUser: {},
    logoutUser: {},
    readUserInfo: {},
    updateUserInfo: {},
  },
  email: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
