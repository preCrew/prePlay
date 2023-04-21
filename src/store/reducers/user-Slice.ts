import { createSlice } from '@reduxjs/toolkit';

export interface TUser {
  nickname: string;
  uid: string;
  email: string;
}

const userData = () => ({
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
  nickname: '',
});
//dummyUserData(20);

const initialUserState: TUser = userData();

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {
    getUserInfoAction(state, action) {
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    updateNicknameAction(state, action) {
      state.nickname = action.payload;
    },
  },
});

export const { getUserInfoAction, updateNicknameAction } = userSlice.actions;
export default userSlice.reducer;
