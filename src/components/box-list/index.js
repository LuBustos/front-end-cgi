import "./box.css";

const BoxList = ({
  list,
  selectedItems,
  handleSelectedItems,
  handleDeleteOneItem,
}) => {
  return (
    <div className="box">
      <ul style={{ padding: "0px" }}>
        {list.map((item) => {
          return (
            <li
              className={`item-base ${
                selectedItems?.includes(item.id) ? "selected" : "item"
              }`}
              onClick={() => handleSelectedItems(item.id)}
              onDoubleClick={() => handleDeleteOneItem(item.id)}
              key={item.id}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoxList;
