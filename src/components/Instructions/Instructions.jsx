import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./Instructions.module.css";
import { useRef, useState } from "react";

Instructions.propTypes = {
  buttonClass: PropTypes.string,
};

export default function Instructions({ buttonClass }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef(null);

  const Popup = () => (
    <div
      className={styles.popupContainer}
      tabIndex={-1}
      onKeyDown={(e) => {
        e.preventDefault();
        if (e.key === "Tab") closeRef.current.focus();
      }}
    >
      <div className={`${styles.popup}`} style={{ display: isOpen ? "" : "none" }}>
        <div className={styles.popupHeader}>
          <h1 className={styles.popupHeaderText}>Instructions</h1>
          <button
            ref={closeRef}
            className={styles.popupCloseButton}
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>

        <div className={styles.section}>
          <div className={styles.subsection}>
            <h2 className={styles.subsectionHeader}>How To Play</h2>
            <p className={styles.subsectionText}>
              --The goal is to click every displayed card a single time in a given round. Each
              successful click awards you with one point.
              <br />
              --Once you have clicked each card in a round you progress to the next round.
              <br />
              --But be careful, if you click the same card twice in a single round, you lose your
              progress and your current score/round is reset to 0.
              <br />
              --To submit your current score/round to be your highest, you must click the "End Run"
              button which submits your stats and resets your current score/round to 0
              <br />
              --Every round adds an additional 2 cards from the last. You start at round 0 with 10
              cards, round 1 has 12 cards, round 2 has 14 cards, etc...
              <br />
              --Additionally, as you play and click on pokemon you have never encountered, you will
              find their name and id logged into your pokedex. The pokedex is found in the info
              panel in the header or sidebar of the page and displays 0/1025 (number of pokemon
              found/total pokemon). To view your entries, simply click on the pokedex.
            </p>
          </div>
          <div>
            <h2 className={styles.subsectionHeader}>Saves</h2>
            <p className={styles.subsectionText}>
              --Your progress is saved in your browsers local storage.
              <br />
              --The game automatically saves when you press the "End Run"
              <br />
              --You can also manually save by pressing the "Save" button in the info panel. This
              allows you to stop and continue at any point in the game exactly where you left off.
              <br />
              --Once you have data saved in local storage an additional "Export" button is displayed
              below the "Save" button. This provides you with a .json file that you can later use to
              import.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className={styles.instructions}>
      <button
        className={buttonClass}
        aria-label="Open Instructions"
        onClick={() => setIsOpen(true)}
      >
        <Icon type="questionMark" aria-hidden={true}></Icon>
      </button>
      {isOpen ? <Popup /> : null}
    </div>
  );
}
