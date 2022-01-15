import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

// @ts-expect-error-never-type
export const getPending = (state: AppState) => state.posts.pending;

// @ts-expect-error-never-type
export const getPosts = (state: AppState) => state.posts.posts;

// @ts-expect-error-never-type
export const getError = (state: AppState) => state.posts.error;

export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
