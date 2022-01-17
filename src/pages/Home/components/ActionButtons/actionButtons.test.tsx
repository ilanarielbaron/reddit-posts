import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import { ActionButtons, ActionButtonsProps } from ".";
import { theme } from "../../../../theme";

function renderActionButtons(props: Partial<ActionButtonsProps> = {}) {
  const defaultProps: ActionButtonsProps = {
    onDismiss() {
      return;
    },
    onLoadMore() {
      return;
    },
    setSplitLayout() {
      return;
    },
    splitLayout: false,
  };

  return render(
    <ThemeProvider theme={theme}>
      <ActionButtons {...defaultProps} {...props} />
    </ThemeProvider>
  );
}

test("should display Split Layout and not the simplify", async () => {
  const { getByTestId } = renderActionButtons();

  const layoutButton = await getByTestId("layout-element");

  expect(layoutButton).toHaveTextContent("Split Layout");
});

test("should display simplify layout", async () => {
  const { getByTestId } = renderActionButtons({ splitLayout: true });

  const layoutButton = await getByTestId("layout-element");

  expect(layoutButton).toHaveTextContent("Simplify Layout");
});

test("Should fire onClick", async () => {
  const onLoadMore = jest.fn(() => {
    return;
  });

  const { getByTestId } = renderActionButtons({ onLoadMore });

  await userEvent.click(getByTestId("load-button"));

  expect(onLoadMore).toHaveBeenCalled();
});
