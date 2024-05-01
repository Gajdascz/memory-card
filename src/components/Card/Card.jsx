import PropTypes from "prop-types";
import { useContext } from "react";
import { GameContext } from "../../contexts/game/GameContext";
import styles from "./Card.module.css";

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Card(props) {
  const { onCardClick } = useContext(GameContext);
  const { id, name, type, img, ...rest } = props;
  const capName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <button
      className={styles.card}
      onClick={(e) => {
        onCardClick({ id, name });
        e.currentTarget.blur();
      }}
      {...rest}
    >
      <div className={styles.cardBody} style={{ backgroundColor: `var(--type-${type})` }}>
        <h3 className={styles.cardName}>{capName}</h3>
        <img src={img} alt={name} className={styles.cardImg} />
      </div>
    </button>
  );
}
