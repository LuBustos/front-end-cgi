import "./button.css";

export const PrimaryButton = ({ label = "Add", ...props }) => {
  return (
    <button className="btn primary" {...props}>
      {label}
    </button>
  );
};

export const SecondaryButton = ({ label = "Delete", ...props }) => {
  return (
    <button className="btn secondary" {...props}>
      {label}
    </button>
  );
};

const Undo = ({ ...props }) => {
  return (
    <button className="btn undo" {...props}>
      Undo
    </button>
  );
};

const Actions = ({
  onClickPrimaryButton,
  onClickSecondaryButton,
  onClickUndoButton,
}) => {
  return (
    <div className="buttons-container">
      <div className="left-buttons">
        <Undo data-testid="undo-button" onClick={onClickUndoButton} />
        <SecondaryButton
          data-testid="delete-button"
          onClick={onClickSecondaryButton}
        />
      </div>
      <PrimaryButton
        data-testid="add-button-card"
        onClick={onClickPrimaryButton}
      />
    </div>
  );
};

export default Actions;
