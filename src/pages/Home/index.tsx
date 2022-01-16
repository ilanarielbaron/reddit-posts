import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextButton } from "../../components/TextButton";
import {
  dismissPostRequest,
  fetchPostsRequest,
} from "../../store/posts/actions";
import { DismissAll, PostList } from "./styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getPostsSelector } from "../../store/posts/selectors";
import { FullPost } from "./components/FullPost";
import { PostItem } from "./components/PostItem";

export const Home = () => {
  const posts = useSelector(getPostsSelector);
  const dispatch = useDispatch();

  const [postSelected, selectPost] = useState<IPost | undefined>(undefined);

  // Show the full post if one is selected
  if (postSelected) {
    return <FullPost post={postSelected} selectPost={selectPost} />;
  }

  // Soft delete for all visible posts
  const onDismiss = () => {
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
    <>
      <PostList>
        <TransitionGroup>
          {posts?.map((post: IPost) => {
            if (!post.disable) {
              return (
                <CSSTransition
                  key={`${post.fullname}_${post.author}`}
                  timeout={300}
                  classNames="item"
                >
                  <PostItem
                    post={post}
                    selectPost={selectPost}
                  />
                </CSSTransition>
              );
            }
          })}
        </TransitionGroup>
      </PostList>
      <TextButton onClick={onLoadMore}>Load More</TextButton>
      <DismissAll>
        <TextButton
          onClick={onDismiss}
        >
          Dismiss All
        </TextButton>
      </DismissAll>
    </>
  );
};
