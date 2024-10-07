import "./button.css";

const Add = () => {
  return (
    <button data-testid="primary-button" className="btn primary">
      Add
    </button>
  );
};

const Delete = () => {
  return (
    <button data-testid="secondary-button" className="btn secondary">
      Delete
    </button>
  );
};

const Undo = () => {
  return (
    <button data-testid="undo-button" className="btn undo">
      Undo
    </button>
  );
};

const Actions = () => {
  return (
    <div className="container">
      <div className="left-buttons">
        <Undo />
        <Delete />
      </div>
      <Add />
    </div>
  );
};

export default Actions;
