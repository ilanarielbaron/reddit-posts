import styled from "styled-components";
import { devices } from "../../../../utils/responsive";

export const PostContainer = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: auto;

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

  @media ${devices.tablet} {
    padding: 10px 10vh;
  }
`;

export const PostInfo = styled.div`
  p {
    color: ${(props) => props.theme.colors.textSecondary};
    margin: 5px 0;
    font-size: 14px;
  }

  h2 {
    color: #265b5a;
  }
`;

export const PostImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  img {
    width: 80%;
    max-width: fill-available;
  }

  @media ${devices.mobileM} {
    width: auto;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;

  .read {
    color: blue;
  }
`;
