import styled from "styled-components";
import { devices } from "../../utils/responsive";

export const DismissAll = styled.div`
  position: fixed;
  text-align: center;
  bottom: 0;
  padding: 20px;
  background: #fff;
  opacity: 0.9;
  width: calc(100% - 20px);
  z-index: 1;
`;

export const PostList = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  &.hidden-mobile,
  &.hidden {
    display: none;
  }
  @media ${devices.tablet} {
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
        box-shadow: -3px 0px 5px 0px rgba(171, 171, 171, 0.75);
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
