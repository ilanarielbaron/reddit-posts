import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

const Body = styled.div`
  background: #FAFAFA;
  padding-top: 20px;
`
