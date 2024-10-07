import styles from "./text.module.css";

export const Title = ({ children }) => {
  return (
    <p data-testid="title" className={styles.title}>
      {children}
    </p>
  );
};

export const BodyText = ({ children }) => {
  return (
    <p data-testid="body" className={styles.body}>
      {children}
    </p>
  );
};
