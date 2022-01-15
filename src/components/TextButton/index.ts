import styled from "styled-components";

export const TextButton = styled.button`
  background: none;
  border: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
