
import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

// @ts-ignore
export const getPending = (state: AppState) => state.posts.pending;

// @ts-ignore
export const getPosts = (state: AppState) => state.posts.posts;

// @ts-ignore
export const getError = (state: AppState) => state.posts.error;


export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
