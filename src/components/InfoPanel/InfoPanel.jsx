import { useContext } from "react";
import { GameContext } from "../../contexts/game/GameContext";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";
import InfoPanelButton from "./Button/InfoPanelButton";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";

import styles from "./InfoPanel.module.css";

InfoPanel.propTypes = {
  headerText: PropTypes.string,
  children: PropTypes.node,
};

export default function InfoPanel({ headerText, children }) {
  const { bgMusic, setBgMusic } = useContext(GameContext);
  return (
    <header className={styles.container}>
      <h1 className={styles.headerText}>{headerText}</h1>
      <div className={styles.buttonsContainer}>
        <InfoPanelButton
          isToggle={true}
          isActive={bgMusic}
          onClick={() => setBgMusic(!bgMusic)}
          aria-label="Toggle background music"
        >
          <Icon type="music" aria-hidden={true} />
          <BackgroundMusic src="../bg-music-loop.mp3" playing={bgMusic} />
        </InfoPanelButton>
        <InfoPanelButton aria-label="Open instructions">
          <Icon type="questionMark" aria-hidden={true} />
        </InfoPanelButton>
        <a href="">
          <InfoPanelButton aria-label="Open Github repository">
            <Icon type="gitHub" aria-hidden={true} />
          </InfoPanelButton>
        </a>
      </div>
      {children}
    </header>
  );
}
