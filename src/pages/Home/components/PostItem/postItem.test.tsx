import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { PostItem, PostItemProps } from ".";
import { theme } from "../../../../theme";
import postsReducer from "../../../../store/posts/reducer";

function createTestStore() {
  const store = createStore(
    combineReducers({
      postsState: postsReducer,
    })
  );
  return store;
}

const post = {
  author: "Author1",
  commentsCount: 500,
  disable: false,
  entryDate: "5122211",
  fullname: "t3_wweqq",
  index: 0,
  isRead: false,
  title: "My first post",
};

function renderPost(props: Partial<PostItemProps> = {}) {
  const mockStore = createTestStore();

  const defaultProps: PostItemProps = {
    post,
    selectPost: () => {
      return;
    },
  };

  return render(
    <ThemeProvider theme={theme}>
      <Provider store={mockStore}>
        <PostItem {...defaultProps} {...props} />
      </Provider>
    </ThemeProvider>
  );
}

test("Should display the post title", async () => {
  const { getByRole } = renderPost();

  const element = getByRole("heading");

  expect(element).toHaveTextContent(post.title);
});

test("Should the visited text be there", async () => {
  const { getByText } = renderPost({ post: { ...post, isRead: true } });

  const element = getByText("Visited");

  expect(element).toBeInTheDocument();
});

test("Should the author and entry text be there", async () => {
  const { getByText } = renderPost({ post: { ...post, isRead: true } });

  const element = getByText(`Public by ${post.author} - ${post.entryDate} hours ago`);

  expect(element).toBeInTheDocument();
});
