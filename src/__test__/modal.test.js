import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render } from "@testing-library/react";
import React from "react";
import Modal from "../components/modal";

const handleCloseMocked = jest.fn();
const handleSubmitMocked = jest.fn();

describe("Modal component", () => {
  test("should render modal text", () => {
    const { getByTestId } = render(
      <Modal handleClose={handleCloseMocked}></Modal>
    );

    const modalText = getByTestId("test-text");
    expect(modalText).toBeInTheDocument();
    expect(modalText).toHaveTextContent("Add item to list");
  });

  test("should render modal actions", () => {
    const { getByTestId } = render(
      <Modal
        body="Test body"
        handleClose={handleCloseMocked}
        handleSubmit={handleSubmitMocked}
      />
    );

    const modalActions = getByTestId("test-modal-actions");
    expect(modalActions).toBeInTheDocument();

    const addButton = getByTestId("add-button");
    const cancelButton = getByTestId("cancel-button");

    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
});
