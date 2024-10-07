import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BoxList from "../components/box-list";

describe("BoxList component", () => {
  it("should render box list", () => {
    const { getByText } = render(
      <BoxList>
        <p>Test Box</p>
      </BoxList>
    );

    expect(getByText("Test Box")).toBeInTheDocument();
  });
});
