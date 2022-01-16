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

interface PostItemProps {
  post: IPost;
  selectPost: (post: IPost) => void;
}

export const PostItem = ({ post, selectPost }: PostItemProps) => {
  const dispatch = useDispatch();

  const onDismiss = () => {
    dispatch(dismissPostRequest({ postsToDelete: [post] }));
  };

  return (
    <PostContainer>
      <PostLayout
        onClick={() => {
          selectPost(post);
          dispatch(readPostRequest({ postToRead: post }));
        }}
      >
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
        <TextButton onClick={onDismiss}>Dismiss</TextButton>
      </PostFooter>
    </PostContainer>
  );
};
