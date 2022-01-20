import React from "react";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostFooter, PostImage, PostInfo } from "./styled";
import { TextButton } from "../../../../components/TextButton";

interface FullPostProps {
  post?: IPost;
  selectPost: (post?: IPost) => void;
}

export const FullPost = ({ post, selectPost }: FullPostProps) =>
  !post ? <></> : (
    <PostContainer>
      <PostInfo>
        <h2>{post?.title ?? ""}</h2>
        {post?.author && post?.entryDate && (
          <p>{`Public by ${post?.author} - ${post?.entryDate} hours ago`}</p>
        )}
      </PostInfo>
      {post?.image?.includes("http") && (
        <PostImage>
          <img src={post?.image} alt="postImage" />
        </PostImage>
      )}
      <PostFooter>
        <span>{`${post?.commentsCount} comments`}</span>
        <TextButton
          className="icon"
          onClick={() => {
            selectPost(undefined);
          }}
        >
          <FontAwesomeIcon icon={faLongArrowAltLeft} size="lg" /> Back
        </TextButton>
      </PostFooter>
    </PostContainer>
  );
