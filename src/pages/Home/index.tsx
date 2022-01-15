import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TextButton } from "../../components/TextButton";
import {
  dismissPostRequest,
  fetchPostsRequest,
} from "../../store/posts/actions";
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
        {posts?.map((post: IPost) => {
          if (!post.disable) {
            return (
              <PostItem
                key={`${post.fullname}_${post.author}`}
                post={post}
                selectPost={selectPost}
              />
            );
          }
        })}
      </PostList>
      <TextButton onClick={onLoadMore}>Load More</TextButton>
      <DismissAll>
        <TextButton onClick={onDismiss}>Dismiss All</TextButton>
      </DismissAll>
    </>
  );
};

const DismissAll = styled.div`
  position: fixed;
  text-align: center;
  bottom: 0;
  padding: 10px;
  background: #fff;
  opacity: 0.9;
  width: 100%;
  z-index: 1;
`;

const PostList = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;
