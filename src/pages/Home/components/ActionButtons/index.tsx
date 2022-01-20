import React from "react";
import styled from "styled-components";
import { TextButton } from "../../../../components/TextButton";
import { devices } from "../../../../utils/responsive";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ActionButtonsProps {
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
    <TextButton className="uppercase icon" onClick={onDismiss}>
      <FontAwesomeIcon icon={faTrash} size="lg" />
      <span>Dismiss All</span>
    </TextButton>
    <TextButton
      data-testid="load-button"
      className="uppercase icon"
      onClick={onLoadMore}
    >
      <FontAwesomeIcon icon={faSync} size="lg" />
      <span>Load More</span>
    </TextButton>
    <TextButton
      className="uppercase split icon"
      onClick={() => {
        setSplitLayout((prevValue) => !prevValue);
      }}
    >
      <FontAwesomeIcon icon={faThLarge} size="lg" />
      <span data-testid="layout-element">
        {splitLayout ? "Simplify Layout" : "Split Layout"}
      </span>
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
