import React from "react";
import styled from "styled-components";

export const Spinner = () => {
  return <Loader />;
};

const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #265b5a;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 30px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
