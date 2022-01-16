import styled from "styled-components";
import { devices } from "../../utils/responsive";

export const TextButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &.uppercase {
    text-transform: uppercase;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.split {
    display: none;

    @media ${devices.tablet} {
      display: unset;
    }
  }
`;
