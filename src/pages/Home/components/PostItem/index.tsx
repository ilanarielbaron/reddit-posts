import React from "react";
import styled from "styled-components";
import { PostContainer, PostFooter, PostImage, PostInfo, PostLayout } from "./styled";

interface PostItemProps {
  post: IPost;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <PostContainer>
      <PostLayout>
        <PostInfo>
          <h3>{post.title}</h3>
          <p>{`Public by ${post.author} - ${post.entryDate} hours ago`}</p>
        </PostInfo>
        <PostImage>
          <img src={post.image} alt="postImage" />
        </PostImage>
      </PostLayout>
      <PostFooter>
        <span>{`${post.commentsCount} comments`}</span>
        {post.isRead && <span className="read">Visited</span>}
        <TextButton>Dismiss</TextButton>
      </PostFooter>
    </PostContainer>
  );
};

const TextButton = styled.button`
  background: none;
  border: none;
  
  &:hover {
    color: ${props => props.theme.colors.secondary}
  }
`

