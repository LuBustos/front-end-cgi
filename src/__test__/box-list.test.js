import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BoxList from "../components/box-list";

const listMocked = [
  { id: 1, value: "Item 1" },
  { id: 2, value: "Item 2" },
  { id: 3, value: "Item 3" },
];

const handleSelectedItemsMocked = jest.fn();
const handleDeleteOneItemMocked = jest.fn();

describe("BoxList component", () => {
  it("should render box list", () => {
    const { getByText } = render(
      <BoxList
        list={listMocked}
        selectedItems={[]}
        handleSelectedItems={handleSelectedItemsMocked}
        handleDeleteOneItem={handleDeleteOneItemMocked}
      />
    );

    listMocked.forEach((item) => {
      const listItem = getByText(item.value);
      expect(listItem).toBeInTheDocument();
    });
  });

  test("should select an item when I click on it", () => {
    const { getByText } = render(
      <BoxList
        list={listMocked}
        selectedItems={[]}
        handleSelectedItems={handleSelectedItemsMocked}
        handleDeleteOneItem={handleDeleteOneItemMocked}
      />
    );

    const firstItem = getByText("Item 1");
    fireEvent.click(firstItem);

    expect(handleSelectedItemsMocked).toHaveBeenCalledWith(1);
  });

  test("should have the class selected", () => {
    const { getByText } = render(
      <BoxList
        list={listMocked}
        selectedItems={[1]}
        handleSelectedItems={handleSelectedItemsMocked}
        handleDeleteOneItem={handleDeleteOneItemMocked}
      />
    );

    const firstItem = getByText("Item 1");
    expect(firstItem).toHaveClass("selected");
  });
});
