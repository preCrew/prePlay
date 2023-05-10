import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLoadingState } from './common.interface';
import shortid from 'shortid';
import { TSongLists } from '@src/hooks/useGetSongListsQuery';

export interface TPost {
  //id: number | string;
  Comments?: Array<{
    id?: number | string;
    postId: number | string;
    userId: string;
    content: string;
  }>;
  Likers?: Array<{ userId: number | string }>;
}
export type TypefinalPosts = TPost & TSongLists;
export interface TPosts {
  posts: TypefinalPosts[];
}

const dummyPostData = (data: number) =>
  Array(data)
    .fill(0)
    .map(() => ({
      id: shortid.generate(),
      Comments: [
        { id: shortid.generate(), userId: 'ww@gmail.com', content: 'tttt' },
      ],
      Likers: [{ id: shortid.generate() }],
    }));

const initialPostState: TPosts = {
  posts: [],
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState: initialPostState,
  reducers: {
    getPostAction(
      state: TPosts,
      action: PayloadAction<{ getPosts: TSongLists[] }>,
    ) {
      state.posts.push(...action.payload.getPosts);
    },
    addLikeAction(
      state: TPosts,
      action: PayloadAction<{ postId: number | string; userId: string }>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId,
      );

      const LikersObj = {
        //postId: action.payload.postId,
        userId: action.payload.userId,
      };

      if (state.posts[postIndex].Likers) {
        state.posts[postIndex].Likers = state.posts[postIndex].Likers?.concat([
          LikersObj,
        ]);
        return;
      }
      state.posts[postIndex].Likers = [LikersObj];
    },
    deleteLikeAction(
      state: TPosts,
      action: PayloadAction<{ postId: number | string; userId: string }>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId,
      );
      const postLikesArr = state.posts[postIndex].Likers;
      state.posts[postIndex].Likers = postLikesArr!.filter(
        like => like.userId !== action.payload.userId,
      );
    },
    addCommentAction(
      state: TPosts,
      action: PayloadAction<{
        id: number;
        postId: number | string;
        userId: string;
        content: string;
      }>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId,
      );

      const CommentsObj = {
        id: action.payload.id,
        postId: action.payload.postId,
        userId: action.payload.userId,
        content: action.payload.content,
      };

      if (state.posts[postIndex].Comments) {
        state.posts[postIndex].Comments = state.posts[
          postIndex
        ].Comments?.concat([CommentsObj]);
        return;
      }
      state.posts[postIndex].Comments = [CommentsObj];
    },
    deleteCommentAction(
      state: TPosts,
      action: PayloadAction<{ postId: number | string; id: number }>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId,
      );
      const postCommentsArr = state.posts[postIndex].Comments;
      state.posts[postIndex].Comments = postCommentsArr!.filter(
        comment => comment.id !== action.payload.id,
      );
    },
  },
});

export const {
  addLikeAction,
  deleteLikeAction,
  addCommentAction,
  deleteCommentAction,
  getPostAction,
} = postSlice.actions;
export default postSlice.reducer;
