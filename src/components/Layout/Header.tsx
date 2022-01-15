import React from "react";
import styled from "styled-components";
import levLogo from "../../assets/lev.png";
import redditLogo from "../../assets/reddit.png";
import { devices } from "../../utils/responsive";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src={levLogo} alt="levLogo" />
      <LogoImage src={redditLogo} alt="redditLogo" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  column-gap: 20px;

  @media ${devices.tablet} {
    padding: 10px 10vh;
  }
`;

const LogoImage = styled.img`
  max-width: 50px;
`;
