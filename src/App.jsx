import InfoPanel from "./components/InfoPanel/InfoPanel";
import Footer from "./components/Footer/Footer";
import Pokedex from "./components/Pokedex/Pokedex";
import Stats from "./components/Stats/Stats";
import CardContainer from "./components/CardContainer/CardContainer";
import SaveInterface from "./components/SaveInterface/SaveInterface";
import GameProvider from "./contexts/game/GameProvider";
import styles from "./styles/App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Layout = (width, orientation) => {
    if (orientation.type.includes("landscape"));

    {
      dimensions.width > 775 && (
        <>
          <InfoPanel headerText="Pokémem">
            <Stats />
            <Pokedex />
            <SaveInterface />
            <Footer />
          </InfoPanel>
          <CardContainer />
        </>
      );
    }
    {
      dimensions.width >= 500 && dimensions.width <= 775 && (
        <>
          <InfoPanel headerText="Pokémem">
            <Pokedex />
            <Stats />
            <SaveInterface />
          </InfoPanel>
          <CardContainer />
          <Footer />
        </>
      );
    }
    {
      dimensions.width < 500 && (
        <>
          <InfoPanel headerText="Pokémem">
            <Pokedex />
            <SaveInterface />
          </InfoPanel>
          <Stats />
          <CardContainer />
          <Footer />
        </>
      );
    }
  };

  return (
    <GameProvider>
      <div className={styles.container}>
        {dimensions.width > 775 && (
          <>
            <InfoPanel headerText="Pokémem">
              <Stats />
              <Pokedex />
              <SaveInterface />
              <Footer />
            </InfoPanel>
            <CardContainer />
          </>
        )}
        {dimensions.width >= 500 && dimensions.width <= 775 && (
          <>
            <InfoPanel headerText="Pokémem">
              <Pokedex />
              <Stats />
              <SaveInterface />
            </InfoPanel>
            <CardContainer />
            <Footer />
          </>
        )}
        {dimensions.width < 500 && (
          <>
            <InfoPanel headerText="Pokémem">
              <Pokedex />
              <SaveInterface />
            </InfoPanel>
            <Stats />
            <CardContainer />
            <Footer />
          </>
        )}
      </div>
    </GameProvider>
  );
}

export default App;
