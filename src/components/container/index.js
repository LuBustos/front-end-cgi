import { useState } from "react";
import BoxList from "../box-list";
import Actions from "../buttons";
import { BodyText, Title } from "../paragraph";
import styles from "./card.module.css";
import Modal from "../modal";
import InputField from "../input/input";

const Card = ({ defaultValues = [] }) => {
  const [itemList, setItemList] = useState(defaultValues);
  const [openModal, setOpenModal] = useState(true);
  const [value, setValue] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [undoAction, setUndoAction] = useState([]);

  const handleSelectedItems = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddNewItem = () => {
    if (!value) {
      alert("You cannot add empty strings");
      return;
    }

    const itemId = Math.floor(Math.random() * 10000);

    setUndoAction([
      ...undoAction,
      { state: "ADD", item: [{ id: itemId, value: value }] },
    ]);

    setItemList([...itemList, { id: itemId, value: value }]);
    setValue(null);
    handleCloseModal();
  };

  const handleOnChangeItem = (value) => {
    setValue(value);
  };

  const handleDeleteItem = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item");
      return;
    }

    const values = itemList.filter((item) => selectedItems.includes(item.id));

    setUndoAction([...undoAction, { state: "DELETE", item: values }]);

    const filteredList = itemList.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setItemList(filteredList);
    setSelectedItems([]);
  };

  const handleDeleteOneItem = (id) => {
    const values = itemList.filter((item) => item.id === id);

    setUndoAction([...undoAction, { state: "DELETE", item: values }]);

    const filteredList = itemList.filter((item) => item.id !== id);
    setItemList(filteredList);
  };

  const handleUndoAction = () => {
    console.log("undo", undoAction);
    const lastElement = undoAction.pop();
    console.log(lastElement);

    if (lastElement) {
      if (lastElement.state === "ADD") {
        const filteredList = itemList.filter(
          (item) => !lastElement.item.some((x) => x.id === item.id)
        );

        setItemList(filteredList);
      }

      if (lastElement.state === "DELETE") {
        setItemList([...itemList, ...lastElement.item]);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div data-testid="card" className={styles.card}>
          <Title>This is a technical proof</Title>
          <BodyText data-testid="body-page-text">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis
            nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam
            nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis
            mi pharetra vestibulum venenatis phasellus.
          </BodyText>
          <BoxList
            list={itemList}
            selectedItems={selectedItems}
            handleSelectedItems={handleSelectedItems}
            handleDeleteOneItem={handleDeleteOneItem}
          />
          <Actions
            onClickPrimaryButton={handleOpenModal}
            onClickSecondaryButton={handleDeleteItem}
            onClickUndoButton={handleUndoAction}
          />
        </div>
      </div>
      {openModal ? (
        <Modal handleClose={handleCloseModal} handleSubmit={handleAddNewItem}>
          <InputField
            placeholder="Type the text here..."
            onChange={(e) => handleOnChangeItem(e.target.value)}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default Card;
