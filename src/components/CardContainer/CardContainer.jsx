import PropTypes from "prop-types";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

CardContainer.propTypes = {
  cards: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default function CardContainer({ cards, loading, onClick }) {
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        cards.map((card) => <Card key={card.id} {...card} onClick={onClick} />)
      )}
    </div>
  );
}
