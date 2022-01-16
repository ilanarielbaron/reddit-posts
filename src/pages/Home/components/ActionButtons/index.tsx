import React from "react";
import { TextButton } from "../../../../components/TextButton";

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
}: ActionButtonsProps) => {
  return (
    <div>
      <TextButton className="uppercase" onClick={onDismiss}>
        Dismiss All
      </TextButton>
      <TextButton className="uppercase" onClick={onLoadMore}>
        Load More
      </TextButton>
      <TextButton
        className="uppercase split"
        onClick={() => {
          setSplitLayout((prevValue) => !prevValue);
        }}
      >
        {splitLayout ? "Simple Layout" : "Split Layout"}
      </TextButton>
    </div>
  );
};
