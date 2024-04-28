import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchRandomPokemonData from "../../apis/pokeAPI";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
CardContainer.propTypes = {
  round: PropTypes.number,
  children: PropTypes.node,
  numberOfCards: PropTypes.number,
};
export default function CardContainer({ numberOfCards }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setCards(await fetchRandomPokemonData(numberOfCards));
    };
    fetch();
  }, [numberOfCards]);
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}
