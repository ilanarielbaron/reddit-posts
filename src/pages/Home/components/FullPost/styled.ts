import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

export const PostInfo = styled.div`
  p {
    color: ${(props) => props.theme.colors.textSecondary};
    margin: 5px 0;
    font-size: 14px;
  }
`;

export const PostImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  img {
    max-width: fill-available;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;

  .read {
    color: blue;
  }
`;
