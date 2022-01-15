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
  position: relative;
  bottom: 100%;
  width: 100%;
  padding: 20px 0;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
