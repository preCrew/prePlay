import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLoadingState } from './common.interface';
import shortid from 'shortid';

export interface TPost {
  id: number | string;
  Comments: Array<{ id: number | string }>;
  Likers: Array<{ id: number | string }>;
}
export interface TPosts {
  posts: TPost[];
}

const dummyPostData = (data: number) =>
  Array(data)
    .fill(0)
    .map(() => ({
      id: shortid.generate(),
      Comments: [{ id: shortid.generate() }],
      Likers: [{ id: shortid.generate() }],
    }));
const initialPostState: TPosts = {
  posts: [...dummyPostData(20)],
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState: initialPostState,
  reducers: {
    addLikeAction(
      state: TPosts,
      action: PayloadAction<{ postId: number | string; userId: string }>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId,
      );
      state.posts[postIndex].Likers = [
        { id: action.payload.userId },
        ...state.posts[postIndex].Likers,
      ];
    },
    deleteLikeAction(
      state: TPosts,
      action: PayloadAction<{ postId: number | string; userId: string }>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId,
      );
      const postLikesArr = state.posts[postIndex].Likers;
      state.posts[postIndex].Likers = postLikesArr.filter(
        like => like.id !== action.payload.userId,
      );
    },
  },
});

export const { addLikeAction, deleteLikeAction } = postSlice.actions;
export default postSlice.reducer;
