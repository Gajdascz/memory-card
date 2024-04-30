import PropTypes from "prop-types";
import styles from "./CardContainer.module.css";
import Loading from "../Loading/Loading";

CardContainer.propTypes = {
  cards: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default function CardContainer({ loading, children }) {
  return <div className={styles.container}>{loading ? <Loading /> : children}</div>;
}
