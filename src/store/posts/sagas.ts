/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FetchPostsRequestPayload } from "./types";
import { fetchPostsFailure, fetchPostsSuccess } from "./actions";
import { FETCH_POSTS_REQUEST } from "./actionTypes";
import { parseResponse } from "./utils";

export const fetchPosts = async (payload: FetchPostsRequestPayload) => {
  const { after, isFirstFetch } = payload;
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

    const postParsed = parseResponse(data);

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
