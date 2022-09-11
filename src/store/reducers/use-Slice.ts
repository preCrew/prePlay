import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLoadingState } from './common.interface';

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
