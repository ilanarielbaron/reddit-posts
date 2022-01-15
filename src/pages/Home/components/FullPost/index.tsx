import React from "react";
import { TextButton } from "../../../../components/TextButton";
import { PostContainer, PostFooter, PostImage, PostInfo } from "./styled";

interface FullPostProps {
  post: IPost;
  selectPost: (post?: IPost) => void;
}

export const FullPost = ({ post, selectPost }: FullPostProps) => {
  return (
    <PostContainer>
      <PostInfo>
        <h2>{post.title}</h2>
        <p>{`Public by ${post.author} - ${post.entryDate} hours ago`}</p>
      </PostInfo>
      <PostImage>
        <img src={post.image} alt="postImage" />
      </PostImage>
      <PostFooter>
        <span>{`${post.commentsCount} comments`}</span>
        <TextButton
          onClick={() => {
            selectPost(undefined);
          }}
        >
          Back
        </TextButton>
      </PostFooter>
    </PostContainer>
  );
};
