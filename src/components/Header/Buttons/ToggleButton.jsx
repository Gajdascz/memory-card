import PropTypes from "prop-types";

ToggleButton.propTypes = {
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default function ToggleButton({ btnClass, onClick, children }) {
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
