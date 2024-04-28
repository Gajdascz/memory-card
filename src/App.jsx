import Header from "./components/Header/Header";
import HeaderButton from "./components/Header/Button/HeaderButton";
import Icon from "./components/Icon/Icon";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic";
import fetchRandomPokemonData from "./apis/pokeAPI";
import { useEffect, useState } from "react";

function App() {
  const [bgMusic, setBgMusic] = useState(false);
  const [round, setRound] = useState(0);

  return (
    <div className="app-container">
      <Header text="Poke Memory">
        <HeaderButton
          isToggle={true}
          isActive={bgMusic}
          onClick={() => setBgMusic(!bgMusic)}
          aria-label="Toggle background music"
        >
          <Icon type="music" aria-hidden={true} />
          <BackgroundMusic src="../bg-music-loop.mp3" playing={bgMusic} />
        </HeaderButton>
        <HeaderButton
          isToggle={true}
          isActive={false}
          onClick={() => {}}
          aria-label="Toggle interactive sounds"
        >
          <Icon type="sound" aria-hidden={true} />
        </HeaderButton>
        <HeaderButton aria-label="Open instructions">
          <Icon type="questionMark" aria-hidden={true} />
        </HeaderButton>
      </Header>
      <GameBoard className="app-game-board" round={round} />
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
