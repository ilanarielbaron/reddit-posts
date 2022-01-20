import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  dismissPostRequest,
  fetchPostsRequest,
} from "../../store/posts/actions";
import { Container, BottomNav, ErrorMessage, PostList } from "./styled";
import {
  getErrorSelector,
  getPendingSelector,
  getPostsSelector,
} from "../../store/posts/selectors";
import { FullPost } from "./components/FullPost";
import { PostItem } from "./components/PostItem";
import { ActionButtons } from "./components/ActionButtons";
import { Spinner } from "../../components/Spinner";
import { InfiniteScroll } from "../../components/InfiniteScroll";

export const Home = () => {
  const posts = useSelector(getPostsSelector);
  const loading = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);
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

  // Spinner in all the page if is the first fetch
  if (loading && posts.length === 0) return <Spinner />;

  return (
    <>
      <Container
        className={
          splitLayout && !!postSelected ? "split-layout" : "simple-layout"
        }
      >
        <PostList
          className={
            !!postSelected
              ? !splitLayout
                ? "hidden"
                : "hidden-mobile"
              : "flex"
          }
        >
          {/* Post List with infinite scroll */}
          <InfiniteScroll
            hasMoreData={true}
            isLoading={loading}
            onBottomHit={onLoadMore}
            loadOnMount={true}
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
          </InfiniteScroll>
          {loading && <Spinner />}
        </PostList>

        {/* Full Post displayed only with simple layout */}
        <CSSTransition
          timeout={500}
          classNames="item"
          in={!!postSelected}
          unmountOnExit
        >
          <FullPost post={postSelected} selectPost={selectPost} />
        </CSSTransition>
      </Container>
      {/* Fixed bottom nav */}
      <BottomNav>
        <ActionButtons
          onLoadMore={onLoadMore}
          splitLayout={splitLayout}
          setSplitLayout={setSplitLayout}
          onDismiss={onDismiss}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </BottomNav>
    </>
  );
};
