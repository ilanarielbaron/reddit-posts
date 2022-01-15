import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

export const getPending = (state: AppState) => state.postsState.pending;

export const getPosts = (state: AppState) => state.postsState.posts;

export const getError = (state: AppState) => state.postsState.error;

export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
