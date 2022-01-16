import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};

  &.item-enter {
    opacity: 0;
  }

  &.item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  &.item-exit {
    opacity: 1;
  }

  &.item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
`;

export const PostLayout = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

export const PostInfo = styled.div`
  width: 70%;
  margin-right: 1%;

  h3 {
    margin: 10px 0;
  }

  p {
    color: ${(props) => props.theme.colors.textSecondary};
    margin: 5px 0;
    font-size: 12px;
  }
`;
export const PostImage = styled.div`
  width: 29%;

  img {
    max-width: fill-available;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;

  .read {
    color: blue;
  }
`;
