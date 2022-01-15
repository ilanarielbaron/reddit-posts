import {
  DISMISS_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from './actionTypes';
import {
  DismissPostsRequest,
  DismissPostsRequestPayload,
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsRequestPayload,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
} from './types';

export const fetchPostsRequest = (
  payload: FetchPostsRequestPayload,
): FetchPostsRequest => ({
  type: FETCH_POSTS_REQUEST,
  payload,
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload,
): FetchPostsSuccess => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload,
): FetchPostsFailure => ({
  type: FETCH_POSTS_FAILURE,
  payload,
});

export const dismissPostRequest = (
  payload: DismissPostsRequestPayload,
): DismissPostsRequest => ({
  type: DISMISS_POSTS_REQUEST,
  payload,
});
