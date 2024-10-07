import BoxList from "../box-list";
import Actions from "../buttons";
import { BodyText, Title } from "../paragraph";
import styles from "./card.module.css";

const Card = ({ children }) => {
  return (
    <div className={styles.container}>
      <div data-testid="card" className={styles.card}>
        <Title>This is a technical proof</Title>
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
          inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
          hendrerit posuere augue fames dictumst placerat porttitor, dis mi
          pharetra vestibulum venenatis phasellus.
        </BodyText>
        <BoxList>{children}</BoxList>
        <Actions />
      </div>
    </div>
  );
};

export default Card;
