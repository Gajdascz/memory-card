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
import { save, getSaveObj } from "./apis/saveData";
import SaveInterface from "./components/SaveInterface/SaveInterface";
import { uid } from "./uid";

import Card from "./components/Card/Card";
import GameProvider from "./contexts/game/GameProvider";

function App() {
  const initialState = getSaveObj();
  const [bgMusic, setBgMusic] = useState(initialState.settings.bgMusic);
  const [cards, setCards] = useState(initialState.session.cards);
  const [loading, setLoading] = useState(true);
  const [cardsImported, setCardsImported] = useState(initialState.session.cardsImported);
  const [sessionId, setSessionId] = useState(initialState.session.id);
  const [runNumber, setRunNumber] = useState(initialState.session.runNumber);
  const [round, setRound] = useState(initialState.session.round);
  const [score, setScore] = useState(initialState.session.score);
  const [clicked, setClicked] = useState(initialState.session.clicked);
  const [highest, setHighest] = useState(initialState.progress.highest);
  const [dexEntries, setDexEntries] = useState(initialState.progress.dexEntries);

  const syncState = () => {
    const current = getSaveObj();
    setBgMusic(current.settings.bgMusic);
    setCards(current.session.cards);
    setCardsImported(current.session.cardsImported);
    setSessionId(current.session.id);
    setRunNumber(current.session.runNumber);
    setRound(current.session.round);
    setScore(current.session.score);
    setClicked(current.session.clicked);
    setHighest(current.progress.highest);
    setDexEntries(current.progress.dexEntries);
  };

  const getSaveData = () => ({
    settings: {
      bgMusic,
    },
    session: {
      id: sessionId,
      runNumber,
      score,
      round,
      ...(score > 0 && { cards: cards, clicked: Array.from(clicked) }),
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
    if (cardsImported) {
      setLoading(false);
      return;
    }
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
    setClicked(new Set());
  }, [round, runNumber, sessionId, cardsImported]);

  const addEntry = (id, name) => {
    setDexEntries((prevDexEntries) => {
      const newEntries = [...prevDexEntries.entries];
      newEntries[id] = { ...newEntries[id], name: name };
      return {
        found: prevDexEntries.found + 1,
        entries: newEntries,
      };
    });
  };

  const reset = () => {
    setScore(0);
    setRound(0);
    setRunNumber((prev) => prev + 1);
    setCardsImported(false);
  };

  const onCardClick = (cardData) => {
    const { id, name } = cardData;
    if (clicked.has(id)) {
      reset();
      return;
    }
    setScore((prevScore) => prevScore + 1);
    if (dexEntries.entries[id].name === null) addEntry(id, name);
    const newClicked = new Set(clicked).add(id);
    if (newClicked.size === cards.length) {
      setRound((prevRound) => prevRound + 1);
      setCardsImported(false);
      return;
    }
    setClicked(new Set(clicked).add(id));
    shuffle();
  };

  const onEndRun = () => {
    setHighest({ ...highest, ...(highest.score < score && { score: score, round: round }) });
    save(getSaveData());
    reset();
  };

  return (
    <GameProvider>
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
            onEndRun={onEndRun}
          />
          <Pokedex foundCount={dexEntries.found} dexEntries={dexEntries} />
          <SaveInterface getSaveData={getSaveData} onSync={syncState} />

          <Footer />
        </InfoPanel>
        <CardContainer loading={loading}>
          {cards.map((card) => (
            <Card key={card.id} {...card} onClick={(cardData) => onCardClick(cardData)} />
          ))}
        </CardContainer>
      </div>
    </GameProvider>
  );
}

export default App;
