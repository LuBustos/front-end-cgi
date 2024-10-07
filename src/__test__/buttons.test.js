import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Actions from "../components/buttons";

describe("Actions component", () => {
  it("renders all buttons correctly", () => {
    const { getByTestId } = render(<Actions />);

    expect(getByTestId("primary-button")).toBeInTheDocument();
    expect(getByTestId("secondary-button")).toBeInTheDocument();
    expect(getByTestId("undo-button")).toBeInTheDocument();
  });
});
