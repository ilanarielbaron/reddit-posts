import styled from "styled-components";
import { devices } from "../../../../utils/responsive";

export const PostContainer = styled.div`
  border: 2px solid ${(props) => props.theme.colors.secondary};
  margin-bottom: 10px;
  padding: 10px 5px;
  transition: 0.7s;
  cursor: pointer;
  border-radius: 4px;
  background: #fff;

  @media ${devices.laptop} {
    padding: 10px 20px;
  }

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

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.main};
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
    color: #265b5a;
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
  align-items: center;

  img {
    width: 20px;
  }

  .read {
    color: #265b5a;
  }
`;
