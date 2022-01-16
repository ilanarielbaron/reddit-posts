import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DISMISS_POSTS_REQUEST,
  READ_POST_REQUEST,
} from "./actionTypes";

export interface PostsState {
  posts: IPost[];
  pending: boolean;
  error: string | null;
}

export interface FetchPostsRequestPayload {
  posts?: IPost[];
}

export interface FetchPostsSuccessPayload {
  newPosts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface DismissPostsRequestPayload {
  postsToDelete: IPost[];
}

export interface ReadPostRequestPayload {
  postToRead: IPost;
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

export interface DismissPostsRequest {
  type: typeof DISMISS_POSTS_REQUEST;
  payload: DismissPostsRequestPayload;
}

export interface ReadPostRequest {
  type: typeof READ_POST_REQUEST;
  payload: ReadPostRequestPayload;
}

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | DismissPostsRequest
  | ReadPostRequest;
