import { createSlice } from '@reduxjs/toolkit';
import { TLoadingState } from './common.interface';
import shortid from 'shortid';

export interface TUser {}

const dummyUserData = () => ({
  id: shortid.generate(),
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
});
//dummyUserData(20);

const initialUserState: TUser = dummyUserData();

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
