import "./box.css";

const BoxList = ({
  list,
  selectedItems,
  handleSelectedItems,
  handleDeleteOneItem,
}) => {
  return (
    <div className="box">
      <ul className="container-list">
        {list.map((item, index) => {
          return (
            <li
              className={`item-base ${
                selectedItems?.includes(item.id) ? "selected" : "item"
              }`}
              onClick={() => handleSelectedItems(item.id)}
              onDoubleClick={() => handleDeleteOneItem(item.id)}
              key={item.id}
              data-testid={`item-${index}`}
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
