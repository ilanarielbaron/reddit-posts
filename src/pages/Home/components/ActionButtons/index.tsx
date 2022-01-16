import React from "react";
import { TextButton } from "../../../../components/TextButton";
import loadIcon from "../../../../assets/load.png";
import removeIcon from "../../../../assets/remove.png";
import layoutIcon from "../../../../assets/layout.png";
import styled from "styled-components";
import { devices } from "../../../../utils/responsive";

interface ActionButtonsProps {
  onLoadMore: () => void;
  onDismiss: () => void;
  setSplitLayout: (value: React.SetStateAction<boolean>) => void;
  splitLayout: boolean;
}

export const ActionButtons = ({
  onDismiss,
  splitLayout,
  setSplitLayout,
  onLoadMore,
}: ActionButtonsProps) => (
  <Container>
    <TextButton className="uppercase" onClick={onDismiss}>
      <img src={removeIcon} alt="remove" />
      <span>Dismiss All</span>
    </TextButton>
    <TextButton className="uppercase" onClick={onLoadMore}>
      <img src={loadIcon} alt="load" />
      <span>Load More</span>
    </TextButton>
    <TextButton
      className="uppercase split"
      onClick={() => {
        setSplitLayout((prevValue) => !prevValue);
      }}
    >
      <img src={layoutIcon} alt="layout" />
      <span>{splitLayout ? "Simple Layout" : "Split Layout"}</span>
    </TextButton>
  </Container>
);

const Container = styled.div`
  img {
    width: 20px;

    @media ${devices.tablet} {
      margin: 0 5px 0 10px;
    }
  }

  span {
    display: none;

    @media ${devices.tablet} {
      display: block;
    }
  }
`;
