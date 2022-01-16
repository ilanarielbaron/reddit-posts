import rootSaga, { fetchPosts } from "./sagas";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "./actions";

const posts: IPost[] = [
  {
    author: "Author1",
    commentsCount: 500,
    disable: false,
    entryDate: "5122211",
    fullname: "t3_wweqq",
    index: 0,
    isRead: false,
    title: "My first post",
  },
  {
    author: "Author2",
    commentsCount: 100,
    disable: false,
    entryDate: "5122233",
    fullname: "t3_abcde",
    index: 1,
    isRead: true,
    title: "My second post",
  },
];

const anotherPost: IPost[] = [
  {
    author: "Author3",
    commentsCount: 1,
    disable: false,
    entryDate: "5122311",
    fullname: "t3_asdasd",
    index: 2,
    isRead: false,
    title: "My X post",
  },
]

const testError = new Error("Test error");

describe("Fetching posts", () => {
  describe("First fetch successfully", () => {
    it("Should fetch the first N posts", () => {
      return expectSaga(rootSaga)
        .provide([[matchers.call.fn(fetchPosts), Promise.resolve(posts)]])
        .put(fetchPostsSuccess({ newPosts: posts }))
        .dispatch(fetchPostsRequest({}))
        .run({ silenceTimeout: true });
    });
  });
  describe("Other fetch successfully", () => {
    it("Should fetch the next M posts", () => {
      return expectSaga(rootSaga)
        .provide([[matchers.call.fn(fetchPosts), Promise.resolve(anotherPost)]])
        .put(fetchPostsSuccess({ newPosts: anotherPost }))
        .dispatch(fetchPostsRequest({ posts: posts }))
        .run({ silenceTimeout: true });
    });
  });
  describe("Fetch failed", () => {
    it("Should return an error message", () => {
      return expectSaga(rootSaga)
        .provide([[matchers.call.fn(fetchPosts), Promise.reject(testError)]])
        .put(fetchPostsFailure({ error: testError.message }))
        .dispatch(fetchPostsRequest({}))
        .run({ silenceTimeout: true });
    });
  });
});
