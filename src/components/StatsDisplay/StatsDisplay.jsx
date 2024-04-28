import PropTypes from "prop-types";
import styles from "./StatsDisplay.module.css";

StatsDisplay.propTypes = {
  currentScore: PropTypes.number,
  highestScore: PropTypes.number,
  currentRound: PropTypes.number,
  highestRound: PropTypes.number,
};

export default function StatsDisplay({ currentScore, currentRound, highestScore, highestRound }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.displayHeader}>Stats</h2>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>Current</h3>
          <p className={styles.stat}>score: {currentScore}</p>
          <p className={styles.stat}>round: {currentRound}</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>Highest</h3>
          <p className={styles.stat}>score: {highestScore}</p>
          <p className={styles.stat}>round: {highestRound}</p>
        </div>
      </div>
    </div>
  );
}
