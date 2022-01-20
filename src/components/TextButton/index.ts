import styled from "styled-components";
import { devices } from "../../utils/responsive";

export const TextButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &.uppercase {
    text-transform: uppercase;
  }

  &.icon {
    padding: 10px;
    border-radius: 4px;
    color: #878A8C;
    font-weight: 600;
    &:hover {
      background: #E8E8E8;
    }

    span {
      margin-top: 5px;
    }
  }

  &.split {
    display: none;

    @media ${devices.tablet} {
      display: unset;
    }
  }
`;
