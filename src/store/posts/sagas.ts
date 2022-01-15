/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FetchPostsRequestPayload } from "./types";
import { fetchPostsFailure, fetchPostsSuccess } from "./actions";
import { FETCH_POSTS_REQUEST } from "./actionTypes";
import { parseResponse } from "./utils";

export const fetchPosts = async (payload: FetchPostsRequestPayload) => {
  const { posts } = payload;
  const postsCount = posts ? posts.length : 0;
  const isFirstFetch = postsCount === 0;

  const after = postsCount > 0 && posts && posts[postsCount - 1].fullname;

  const qty = isFirstFetch
    ? process.env.REACT_APP_N_POSTS
    : process.env.REACT_APP_M_POSTS;

  const url = "https://www.reddit.com/r/all/top.json?";
  const params = [`limit=${qty}`];
  if (!isFirstFetch) params.push(`after=${after}`);

  try {
    const response = await fetch(`${url}${params.join("&")}`, {
      method: "GET",
    });
    const data = await response.json();

    if (data.error) {
      throw new Error(data.message ?? "genericError");
    }

    const postParsed = parseResponse(data, postsCount);

    return postParsed;
  } catch (e: any) {
    throw new Error(e.message ?? "genericError");
  }
};

export function* fetchPostsSaga(action: { payload: FetchPostsRequestPayload }) {
  try {
    const response: IPost[] = yield call(fetchPosts, action.payload);
    yield put(
      fetchPostsSuccess({
        newPosts: response,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* rootSaga() {
  yield all([takeLatest(FETCH_POSTS_REQUEST as any, fetchPostsSaga)]);
}

export default rootSaga;
