import InfoPanel from "./components/InfoPanel/InfoPanel";
import InfoPanelButton from "./components/InfoPanel/Button/InfoPanelButton";
import Icon from "./components/Icon/Icon";
import Footer from "./components/Footer/Footer";
import styles from "./styles/App.module.css";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic";
import Pokedex from "./components/Pokedex/Pokedex";
import { useEffect, useState } from "react";
import Stats from "./components/Stats/Stats";
import CardContainer from "./components/CardContainer/CardContainer";
import { fetchRandomPokemonData } from "./apis/pokeAPI";
import { loadInitialState } from "./apis/saveData";
import SaveInterface from "./components/SaveInterface/SaveInterface";
const uid = () =>
  Math.floor(Math.random() ** Math.round(Math.random()) * Math.round(Math.random() * 10000));

function App() {
  const initialState = loadInitialState();
  const [bgMusic, setBgMusic] = useState(initialState.settings.bgMusic);

  const [cards, setCards] = useState(initialState.session.cards);
  const [loading, setLoading] = useState(true);

  const [round, setRound] = useState(initialState.session.round);
  const [score, setScore] = useState(initialState.session.score);
  const [clicked, setClicked] = useState(initialState.session.clicked);

  const [highest, setHighest] = useState(initialState.progress.highest);

  const [dexEntries, setDexEntries] = useState(initialState.progress.dexEntries);

  const getSaveData = () => ({
    settings: {
      bgMusic,
    },
    session: {
      score,
      round,
      ...(score > 0 && { cards: cards, clicked: clicked }),
    },
    progress: {
      highest,
      dexEntries,
    },
  });

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
        const response = await fetchRandomPokemonData(10 + round * 2);
        setCards(response);
      } catch (error) {
        console.error(`Failed to fetch cards: ${error}`);
      }
      setLoading(false);
    };
    fetch();
  }, [round]);

  useEffect(() => {});

  const onCardClick = (cardData) => {
    const { id, name } = cardData;
    if (clicked.has(id)) onRoundLost();
    else {
      setClicked(new Set(clicked).add(id));
      if (dexEntries[id].name === null) {
        setDexEntries((prevEntries) => {
          const copy = [...prevEntries];
          copy[id] = { ...copy[id], name: name };
          return copy;
        });
      }
      shuffle();
    }
  };

  const onEndRun = () => {};

  const onRoundLost = () => {};

  const onRoundComplete = () => {};

  return (
    <div className={styles.container}>
      <InfoPanel
        headerText="Pokémem"
        buttons={[
          <InfoPanelButton
            key={uid()}
            isToggle={true}
            isActive={bgMusic}
            onClick={() => setBgMusic(!bgMusic)}
            aria-label="Toggle background music"
          >
            <Icon type="music" aria-hidden={true} />
            <BackgroundMusic src="../bg-music-loop.mp3" playing={bgMusic} />
          </InfoPanelButton>,
          <InfoPanelButton aria-label="Open instructions" key={uid()}>
            <Icon type="questionMark" aria-hidden={true} />
          </InfoPanelButton>,
          <a key={uid()} href="">
            <InfoPanelButton aria-label="Open Github repository" key={uid()}>
              <Icon type="gitHub" aria-hidden={true} />
            </InfoPanelButton>
          </a>,
        ]}
      >
        <Stats
          currentScore={score}
          currentRound={round}
          highestScore={highest.score}
          highestRound={highest.round}
        />
        <Pokedex foundCount={dexEntries.found} dexEntries={dexEntries} />
        <SaveInterface getSaveData={getSaveData} />

        <Footer />
      </InfoPanel>
      <CardContainer
        cards={cards}
        loading={loading}
        onClick={(cardData) => onCardClick(cardData)}
      />
    </div>
  );
}

export default App;
