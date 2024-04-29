import InfoPanel from "./components/InfoPanel/InfoPanel";
import InfoPanelButton from "./components/InfoPanel/Button/InfoPanelButton";
import Icon from "./components/Icon/Icon";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";
import styles from "./styles/App.module.css";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic";
import Pokedex from "./components/Pokedex/Pokedex";
import { useEffect, useState } from "react";
import Stats from "./components/Stats/Stats";

const uid = () =>
  Math.floor(Math.random() ** Math.round(Math.random()) * Math.round(Math.random() * 10000));

function App() {
  const [bgMusic, setBgMusic] = useState(false);
  const [round, setRound] = useState(0);

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
          <InfoPanelButton
            key={uid()}
            isToggle={true}
            isActive={false}
            onClick={() => {}}
            aria-label="Toggle interactive sounds"
          >
            <Icon type="sound" aria-hidden={true} />
          </InfoPanelButton>,
          <InfoPanelButton aria-label="Open instructions" key={uid()}>
            <Icon type="questionMark" aria-hidden={true} />
          </InfoPanelButton>,
        ]}
      >
        <Stats />
        <Pokedex />
        <Footer />
      </InfoPanel>
      <GameBoard className="app-game-board" round={round} />
    </div>
  );
}

export default App;
