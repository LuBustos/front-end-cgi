import "./text.css";

export const Title = ({ children }) => {
  return (
    <p data-testid="title" className={"title"}>
      {children}
    </p>
  );
};

export const BodyText = ({ children, ...props }) => {
  return (
    <p className={"body"} {...props}>
      {children}
    </p>
  );
};
