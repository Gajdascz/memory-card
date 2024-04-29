import PropTypes from "prop-types";
import styles from "./Pokedex.module.css";
import { useState } from "react";

Pokedex.propTypes = {
  dexEntries: PropTypes.object,
  found: PropTypes.number,
  entries: PropTypes.array,
};

export default function Pokedex({ dexEntries }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className={`${styles.case} ${isOpen ? `${styles.viewing}` : `${styles.down}`}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.top}>
        <div className={styles.dexterLight} />
        <div className={styles.batteryIndicators}>
          <div className={styles.batteryRed} />
          <div className={styles.batteryYellow} />
          <div className={styles.batteryGreen} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.monitor}>
          <div className={styles.monitorTop}>
            <div className={styles.monitorBrightness} />
            <div className={styles.monitorBrightness} />
          </div>
          <div className={styles.monitorScreen}>
            <p className={styles.foundCount}>{dexEntries.found}</p>
            <p className={styles.totalCount}>{dexEntries.entries.length}</p>
          </div>
          <div className={styles.monitorBottom}>
            <div className={styles.monitorIndicator} />
            <div className={styles.monitorSpeaker}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
