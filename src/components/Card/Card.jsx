import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ data }) {
  const { name, type, img, cry } = data;
  return (
    <div
      className={styles.card}
      aria-label={`${name} card`}
      style={{ backgroundColor: `var(--type-${type})` }}
    >
      <p className={styles.cardName}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <img src={img} alt={name} className={styles.cardImg} />
      <audio src={cry}></audio>
    </div>
  );
}
