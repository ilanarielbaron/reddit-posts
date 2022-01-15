import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <span>Created by Ilan Baron</span>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
