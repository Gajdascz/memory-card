import PropTypes from "prop-types";
import { useRef } from "react";
import styles from "./Card.module.css";

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Card(props) {
  const { id, name, type, img, onClick, ...rest } = props;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    e.currentTarget.blur();
  };

  return (
    <button
      id={id}
      className={styles.card}
      aria-label={`${name} card`}
      onClick={handleClick}
      {...rest}
    >
      <div className={styles.cardBody} style={{ backgroundColor: `var(--type-${type})` }}>
        <p className={styles.cardName}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <img src={img} alt={name} className={styles.cardImg} />
      </div>
    </button>
  );
}
