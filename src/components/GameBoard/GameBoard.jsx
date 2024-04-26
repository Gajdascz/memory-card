import PropTypes from "prop-types";

GameBoard.propTypes = {
  className: PropTypes.string,
};

export default function GameBoard(props) {
  return <div className={props.className}>Board</div>;
}
