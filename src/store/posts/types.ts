import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes';

export interface IPost {
  title: string;
  author: string;
  entryDate: string;
  image?: string;
  commentsCount: number;
  isRead: boolean;
  disable: boolean;
}

export interface PostsState {
  posts: IPost[];
  pending: boolean;
  error: string | null;
}

export interface FetchPostsRequestPayload {
  isFirstFetch: boolean;
  after?: string;
}

export interface FetchPostsSuccessPayload {
  newPosts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof FETCH_POSTS_REQUEST;
  payload: FetchPostsRequestPayload;
}

export type FetchPostsSuccess = {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof FETCH_POSTS_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
