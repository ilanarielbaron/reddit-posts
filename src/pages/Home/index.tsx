import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPostsRequest } from "../../store/posts/actions";
import { getPostsSelector } from "../../store/posts/selectors";
import { PostItem } from "./components/PostItem";

export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  console.log(posts)

  useEffect(() => {
    dispatch(fetchPostsRequest({ isFirstFetch: true }));
  }, [dispatch]);

  return (
    <PostList>
      {posts?.map((post: IPost) => {
        return (
        <PostItem key={post.fullname} post={post} />
      )})}
    </PostList>
  );
};

const PostList = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;
