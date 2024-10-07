import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../components/container";

describe("Card components", () => {
  it("renders Card correctly", () => {
    const { getByTestId } = render(<Card>List</Card>);

    expect(getByTestId("card")).toBeInTheDocument();
    expect(getByTestId("title")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
    expect(getByTestId("primary-button")).toBeInTheDocument();
    expect(getByTestId("secondary-button")).toBeInTheDocument();
    expect(getByTestId("undo-button")).toBeInTheDocument();
  });
});
