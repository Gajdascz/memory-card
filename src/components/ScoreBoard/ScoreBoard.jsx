import PropTypes from "prop-types";

ScoreBoard.propTypes = {
  currentScore: PropTypes.number,
  highestScore: PropTypes.number,
};

export default function ScoreBoard({ currentScore, highestScore }) {
  return (
    <div className="score-board">
      <h2 className="score-board-header">Score</h2>
      <div className="score-text-wrapper">
        <span className="score-text-static">current:</span>
        <span className="current-score">{currentScore}</span>
      </div>
      <div className="score-text-wrapper">
        <span className="score-text-static">highest:</span>
        <span className="highest-score">{highestScore}</span>
      </div>
    </div>
  );
}
