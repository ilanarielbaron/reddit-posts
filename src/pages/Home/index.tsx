import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  dismissPostRequest,
  fetchPostsRequest,
} from "../../store/posts/actions";
import { Container, DismissAll, PostList } from "./styled";
import { getPostsSelector } from "../../store/posts/selectors";
import { FullPost } from "./components/FullPost";
import { PostItem } from "./components/PostItem";
import { ActionButtons } from "./components/ActionButtons";

export const Home = () => {
  const posts = useSelector(getPostsSelector);
  const dispatch = useDispatch();

  const [postSelected, selectPost] = useState<IPost | undefined>(undefined);
  const [splitLayout, setSplitLayout] = useState(false);

  // Soft delete for all visible posts
  const onDismiss = () => {
    selectPost(undefined);
    dispatch(
      dismissPostRequest({
        postsToDelete: posts.filter((post) => !post.disable),
      })
    );
  };

  const onLoadMore = () => {
    dispatch(fetchPostsRequest({ posts }));
  };

  return (
    <Container
      className={
        splitLayout && !!postSelected ? "split-layout" : "simple-layout"
      }
    >
      <PostList
        className={
          !!postSelected ? (!splitLayout ? "hidden" : "hidden-mobile") : "flex"
        }
      >
        <TransitionGroup>
          {posts?.map((post: IPost) => {
            if (!post.disable) {
              return (
                <CSSTransition
                  key={`${post.fullname}_${post.author}`}
                  timeout={300}
                  classNames="item"
                >
                  <PostItem post={post} selectPost={selectPost} />
                </CSSTransition>
              );
            }
          })}
        </TransitionGroup>
        <DismissAll>
          <ActionButtons
            splitLayout={splitLayout}
            setSplitLayout={setSplitLayout}
            onLoadMore={onLoadMore}
            onDismiss={onDismiss}
          />
        </DismissAll>
      </PostList>

      <CSSTransition
        timeout={500}
        classNames="item"
        in={!!postSelected}
        unmountOnExit
      >
        <FullPost post={postSelected} selectPost={selectPost} />
      </CSSTransition>
    </Container>
  );
};
