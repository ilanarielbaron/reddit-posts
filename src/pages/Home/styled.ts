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

  @media ${devices.tablet} {
    width: 80%;

    &.hidden-mobile {
      display: flex;
    }
  }
`;

export const Container = styled.div`
  @media ${devices.tablet} {
    &.split-layout {
      display: flex;
      column-gap: 1%;
      padding-bottom: 50px;

      & > div {
        width: 49%;
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
