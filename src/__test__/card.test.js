import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../components/container";

const defaultValues = [
  { id: 1, value: "Item 1" },
  { id: 2, value: "Item 2" },
];

describe("Card components", () => {
  beforeEach(() => {
    render(<Card defaultValues={defaultValues} />);
  });

  it("renders Card correctly", () => {
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("body-page-text")).toBeInTheDocument();
    expect(screen.getByTestId("add-button-card")).toBeInTheDocument();
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
    expect(screen.getByTestId("undo-button")).toBeInTheDocument();
  });

  it("should display default items in the BoxList", () => {
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should opens the modal when primary button is clicked", () => {
    fireEvent.click(screen.getByTestId("add-button-card"));
    expect(screen.getByTestId("body-modal-text")).toBeInTheDocument();
  });

  it("should close the modal when cancel button is clicked", () => {
    fireEvent.click(screen.getByTestId("add-button-card"));
    fireEvent.click(screen.getByTestId("cancel-button"));
    expect(
      screen.queryByPlaceholderText(/Type the text here.../i)
    ).not.toBeInTheDocument();
  });

  it("should add a new item when the modal form is submitted", () => {
    fireEvent.click(screen.getByTestId("add-button-card"));
    fireEvent.change(screen.getByPlaceholderText(/Type the text here.../i), {
      target: { value: "New Item" },
    });
    fireEvent.click(screen.getByTestId("add-button"));
    expect(screen.getByText("New Item")).toBeInTheDocument();
  });

  it("should do not add an empty item", () => {
    window.alert = jest.fn();
    fireEvent.click(screen.getByTestId("add-button-card"));
    fireEvent.click(screen.getByTestId("add-button"));
    expect(window.alert).toHaveBeenCalledWith("You cannot add empty strings");
  });

  it("should select and delete an item", () => {
    fireEvent.click(screen.getByText("Item 1"));
    fireEvent.click(screen.getByTestId("delete-button"));
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("should show alert when trying to delete without selection", () => {
    window.alert = jest.fn();
    fireEvent.click(screen.getByTestId("delete-button"));
    expect(window.alert).toHaveBeenCalledWith(
      "Please select at least one item"
    );
  });

  it("undoes the last delete action", () => {
    fireEvent.click(screen.getByText("Item 1"));
    fireEvent.click(screen.getByTestId("delete-button"));
    fireEvent.click(screen.getByTestId("undo-button"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });
});
