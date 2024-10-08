import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Actions from "../components/buttons";

describe("Actions component", () => {
  it("renders all buttons correctly", () => {
    const { getByTestId } = render(<Actions />);

    expect(getByTestId("add-button-card")).toBeInTheDocument();
    expect(getByTestId("delete-button")).toBeInTheDocument();
    expect(getByTestId("undo-button")).toBeInTheDocument();
  });
});
