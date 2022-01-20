import styled from "styled-components";
import { devices } from "../../utils/responsive";

export const BottomNav = styled.div`
  position: sticky;
  text-align: center;
  bottom: 0;
  padding: 20px 0;
  background: #fff;
  opacity: 0.9;
  z-index: 1;

  &.hidden-mobile,
  &.hidden {
    display: none;
  }

  @media ${devices.tablet} {
    &.hidden-mobile {
      display: block;
    }
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;

  &.hidden-mobile,
  &.hidden {
    display: none;
  }

  width: 90%;
  max-width: 800px;
  margin: auto;

  .secondary {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media ${devices.tablet} {
    width: 80%;

    &.hidden-mobile {
      display: flex;
    }
  }
`;

export const NoPosts = styled.span`
  &.no-posts-enter {
    opacity: 0;
  }

  &.no-posts-enter-active {
    opacity: 1;
    transition: opacity 900ms ease-in;
  }

  &.no-posts-exit {
    opacity: 1;
  }

  &.no-posts-exit-active {
    opacity: 0;
    transition: opacity 900ms ease-in;
  }
`;

export const Container = styled.div`
  min-height: 85vh;

  @media ${devices.tablet} {
    &.split-layout {
      display: flex;
      column-gap: 2%;
      padding-bottom: 50px;
      max-width: 90%;
      margin: auto;

      & > div {
        width: 48%;
        margin: 0;
      }
    }
  }
`;

export const ErrorMessage = styled.p`
  display: block;
  width: 100%;
  z-index: 1;
  color: red;
`;
