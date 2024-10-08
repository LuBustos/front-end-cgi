import { PrimaryButton, SecondaryButton } from "../buttons";
import { BodyText } from "../paragraph";
import "./modal.css";

const Modal = ({
  title = "",
  body = "",
  children,
  handleClose,
  handleSubmit,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div data-testid="test-text" className="modal-text">
          <BodyText data-testid="body-modal-text">Add item to list</BodyText>
        </div>
        <div data-testid="test-body">{children}</div>
        <div data-testid="test-modal-actions" className="modal-actions">
          {handleSubmit ? (
            <PrimaryButton
              data-testid="add-button"
              label="Add"
              onClick={handleSubmit}
            />
          ) : null}
          {handleClose ? (
            <SecondaryButton
              data-testid="cancel-button"
              label="Cancel"
              onClick={handleClose}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
