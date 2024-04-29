import styles from "./Pokedex.module.css";

export default function Pokedex({ foundCount, totalCount }) {
  return (
    <button className={styles.case}>
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
            <p className={styles.foundCount}>{foundCount}</p>
            <p>/</p>
            <p className={styles.totalCount}>{totalCount}</p>
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
