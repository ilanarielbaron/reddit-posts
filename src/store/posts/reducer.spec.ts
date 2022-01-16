import {
  dismissPostRequest,
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
  readPostRequest,
} from "./actions";
import { initialState } from "./reducer";
import reducer from "./reducer";

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
];

const errorMsg = "Error message";

describe(`Reducing the fetch posts`, () => {
  it("Must return pending state", () => {
    const initialStateTest = {
      ...initialState,
      pending: false,
    };

    expect(reducer(initialStateTest, fetchPostsRequest({}))).toEqual({
      ...initialState,
      pending: true,
    });
  });
});

const failureActions = [
  {
    request: fetchPostsRequest({}),
    failure: fetchPostsFailure({ error: errorMsg }),
  },
];

failureActions.forEach((action) => {
  describe(`Reducing failure action`, () => {
    it("Must return the error message", () => {
      const state = reducer(initialState, action.request);

      expect(reducer(state, action.failure)).toEqual({
        ...state,
        error: errorMsg,
        pending: false,
      });
    });
  });
});

describe("Reducing successfully action for first fetch", () => {
  const requestAction = fetchPostsRequest({});
  const successAction = fetchPostsSuccess({ newPosts: posts });

  const state = reducer(initialState, requestAction);

  it("Must return the new posts fetched", () => {
    expect(reducer(state, successAction)).toEqual({
      ...state,
      pending: false,
      posts: [...state.posts, ...posts],
    });
  });
});

describe("Reducing read post request", () => {
  const requestAction = readPostRequest({ postToRead: posts[0] });

  const state = reducer({ ...initialState, posts: posts }, requestAction);
  it("Must return the posts with the first read", () => {
    expect(reducer(state, requestAction)).toEqual({
      ...state,
      posts: [{ ...state.posts[0], isRead: true }, ...state.posts.slice(1)],
    });
  });
});


describe("Reducing dismiss post request", () => {
  const requestAction = dismissPostRequest({ postsToDelete: [posts[0]] });

  const state = reducer({ ...initialState, posts: posts }, requestAction);
  it("Must return the posts without the first one", () => {
    expect(reducer(state, requestAction)).toEqual({
      ...state,
      posts: [...state.posts.splice(0)],
    });
  });
});
