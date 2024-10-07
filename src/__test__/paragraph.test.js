import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BodyText, Title } from "../components/paragraph";

describe("Paragraph components", () => {
  it("renders Title correctly", () => {
    const { getByTestId } = render(<Title>Title</Title>);

    expect(getByTestId("title")).toBeInTheDocument();
  });

  it("renders Body text correctly", () => {
    const { getByTestId } = render(<BodyText>Body</BodyText>);

    expect(getByTestId("body")).toBeInTheDocument();
  });
});
