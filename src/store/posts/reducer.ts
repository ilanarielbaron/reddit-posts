import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from './actionTypes';

import { PostsActions, PostsState } from './types';

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
        posts: [...state.posts, action.payload.posts],
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
