import InfoPanel from "./components/InfoPanel/InfoPanel";
import Footer from "./components/Footer/Footer";
import Pokedex from "./components/Pokedex/Pokedex";
import Stats from "./components/Stats/Stats";
import CardContainer from "./components/CardContainer/CardContainer";
import SaveInterface from "./components/SaveInterface/SaveInterface";
import GameProvider from "./contexts/game/GameProvider";
import styles from "./styles/App.module.css";

function App() {
  return (
    <GameProvider>
      <div className={styles.container}>
        <InfoPanel headerText="Pokémem">
          <Stats />
          <Pokedex />
          <SaveInterface />
          <Footer />
        </InfoPanel>
        <CardContainer />
      </div>
    </GameProvider>
  );
}

export default App;
