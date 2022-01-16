import { initialState } from "./reducer";
import { getPosts, getError, getPending } from "./selectors";

const state: {
  postsState: { pending: boolean; posts: IPost[]; error: string | null };
} = {
  postsState: {
    ...initialState,
    error: "Error",
    posts: [
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
    ],
  },
};

describe("Get the posts from the state", () => {
  it("Must return the wallet", () => {
    expect(getPosts(state)).toEqual(state.postsState.posts);
  });
});

describe("Get the error from state", () => {
  it("Must return the error", () => {
    expect(getError(state)).toEqual(state.postsState.error);
  });
});

describe("Get if is pending from state", () => {
  it("Must return a boolean", () => {
    expect(getPending(state)).toEqual(state.postsState.pending);
  });
});
