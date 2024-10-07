import styles from "./box.module.css";

const BoxList = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default BoxList;
