import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import CardContainer from "../CardContainer/CardContainer";
import StatsDisplay from "../StatsDisplay/StatsDisplay";

import styles from "./GameBoard.module.css";
import { useState } from "react";

GameBoard.propTypes = {
  className: PropTypes.string,
};

export default function GameBoard() {
  const [round, setRound] = useState(0);
  const numberOfCards = 10 + round * 2;
  return (
    <div className={styles.container}>
      {/* <StatsDisplay /> */}
      <CardContainer numberOfCards={numberOfCards}></CardContainer>
    </div>
  );
}
