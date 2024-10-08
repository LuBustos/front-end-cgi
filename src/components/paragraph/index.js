import styles from "./text.module.css";

export const Title = ({ children }) => {
  return (
    <p data-testid="title" className={styles.title}>
      {children}
    </p>
  );
};

export const BodyText = ({ children, ...props }) => {
  return (
    <p className={styles.body} {...props}>
      {children}
    </p>
  );
};
