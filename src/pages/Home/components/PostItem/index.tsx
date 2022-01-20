import React from "react";
import { useDispatch } from "react-redux";
import { TextButton } from "../../../../components/TextButton";
import {
  dismissPostRequest,
  readPostRequest,
} from "../../../../store/posts/actions";
import {
  PostContainer,
  PostFooter,
  PostImage,
  PostInfo,
  PostLayout,
} from "./styled";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface PostItemProps {
  post: IPost;
  selectPost: (post: IPost) => void;
}

export const PostItem = ({ post, selectPost }: PostItemProps) => {
  const dispatch = useDispatch();

  const onDismiss = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(dismissPostRequest({ postsToDelete: [post] }));
  };

  return (
    <PostContainer
      onClick={() => {
        selectPost(post);
        dispatch(readPostRequest({ postToRead: post }));
      }}
    >
      <PostLayout>
        <PostInfo>
          <h3>{post.title}</h3>
          <p>{`Public by ${post.author} - ${post.entryDate} hours ago`}</p>
        </PostInfo>
        {post.image?.includes("http") && (
          <PostImage>
            <img src={post.image} alt="postImage" />
          </PostImage>
        )}
      </PostLayout>
      <PostFooter>
        <span>{`${post.commentsCount} comments`}</span>
        {post.isRead && (
          <div className="read">
            <FontAwesomeIcon icon={faCheck} size="lg" /> Visited
          </div>
        )}
        <TextButton className="icon" onClick={onDismiss}>
          <FontAwesomeIcon icon={faTrash} size="lg" /> Dismiss
        </TextButton>
      </PostFooter>
    </PostContainer>
  );
};
