import PropTypes from "prop-types";
import styles from "./CardContainer.module.css";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import { useContext } from "react";
import { GameContext } from "../../contexts/game/GameContext";
CardContainer.propTypes = {
  cards: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default function CardContainer() {
  const { loading, cards } = useContext(GameContext);
  return (
    <div className={styles.container}>
      {loading ? <Loading /> : cards.map((card) => <Card key={card.id} {...card} />)}
    </div>
  );
}
