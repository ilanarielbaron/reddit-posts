import {
  DISMISS_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./actionTypes";

import { PostsActions, PostsState } from "./types";

export const initialState: PostsState = {
  pending: false,
  error: null,
  posts: [],
};

const reducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: [...state.posts, ...action.payload.newPosts],
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case DISMISS_POSTS_REQUEST:
      const newPostList = [...state.posts];

      action.payload.postsToDelete.forEach((postToDelete) => {
        newPostList[postToDelete.index].disable = true;
      });

      return {
        ...state,
        posts: newPostList,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
