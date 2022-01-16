import styled from "styled-components";

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
`;
