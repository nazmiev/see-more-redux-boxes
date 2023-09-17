import styles from "./CardItem.module.css";

const CardItem = ({ color, id, name }) => (
  <div className={styles.item}>
    <div className={styles.colorBox} style={{ backgroundColor: color }}>
      {id}
    </div>
    <div className={styles.description}>{name}</div>
  </div>
);

export default CardItem;
