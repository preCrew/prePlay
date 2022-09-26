import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLoadingState } from './common.interface';
import shortid from 'shortid';

export interface TPost {}

const dummyPostData = (data: number) =>
  Array(data)
    .fill(0)
    .map(() => ({
      id: shortid.generate(),
      Comment: [],
      Liker: [],
    }));
const initialPostState: TPost = {
  posts: [...dummyPostData(20)],
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState: initialPostState,
  reducers: {
    addCommentAction(state: TPost, action: PayloadAction<{ id: number }>) {
      //dummyPostData(20).Comment = [action.payload,...state.Comment]
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
