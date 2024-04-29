import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchRandomPokemonData } from "../../apis/pokeAPI";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
CardContainer.propTypes = {
  round: PropTypes.number,
  children: PropTypes.node,
  numberOfCards: PropTypes.number,
};
export default function CardContainer({ numberOfCards }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffle = () => {
    setCards((current) => {
      const cards = [...current];
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      return cards;
    });
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await fetchRandomPokemonData(numberOfCards);
        setCards(response);
      } catch (error) {
        console.error(`Failed to fetch cards: ${error}`);
      }
      setLoading(false);
    };
    fetch();
  }, [numberOfCards]);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            onClick={(e) => {
              shuffle(e);
              e.currentTarget.blur();
            }}
          />
        ))
      )}
    </div>
  );
}
