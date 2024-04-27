import PropTypes from "prop-types";
CardContainer.propTypes = {
  children: PropTypes.node,
};
export default function CardContainer({ children }) {
  return <div className="card-container">{children}</div>;
}
