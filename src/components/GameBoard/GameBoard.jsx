import PropTypes from "prop-types";

import CardContainer from "../CardContainer/CardContainer";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import Loading from "../Loading/Loading";

import styles from "./GameBoard.module.css";

GameBoard.propTypes = {
  className: PropTypes.string,
};

export default function GameBoard() {
  return (
    <div className={styles.container}>
      <ScoreBoard />
      <Loading />
      <CardContainer></CardContainer>
    </div>
  );
}
