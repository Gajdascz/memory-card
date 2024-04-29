import PropTypes from "prop-types";
import styles from "./Card.module.css";

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  cry: PropTypes.string,
};

export default function Card(props) {
  const { id, name, type, img, cry, ...rest } = props;
  return (
    <button id={id} className={styles.card} aria-label={`${name} card`} {...rest}>
      <div className={styles.cardBody} style={{ backgroundColor: `var(--type-${type})` }}>
        <p className={styles.cardName}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <img src={img} alt={name} className={styles.cardImg} />
        <audio src={cry}></audio>
      </div>
    </button>
  );
}
