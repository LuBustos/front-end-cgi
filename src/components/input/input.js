import "./input.css";

const InputField = ({ ...props }) => {
  return <input data-testid="test-input" className="input" {...props} />;
};

export default InputField;
