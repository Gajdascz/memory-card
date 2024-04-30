import PropTypes from "prop-types";
import styles from "./PokedexMonitor.module.css";

PokedexOpenDisplay.propTypes = {
  onClose: PropTypes.func,
  closeRef: PropTypes.object,
  dexEntries: PropTypes.object,
};

export default function PokedexOpenDisplay({ onClose, closeRef, dexEntries }) {
  return (
    <>
      <div className={styles.viewingHeader}>
        <h2>Pokédex</h2>
        <button
          ref={closeRef}
          className={styles.viewingCloseButton}
          onClick={(e) => onClose(false)}
          tabIndex={1}
        >
          Close
        </button>
      </div>
      <div className={styles.viewingEntries}>
        <p className={styles.viewingFoundText}>
          {dexEntries.found} / {dexEntries.entries.length} (
          {dexEntries.found / dexEntries.entries.length})
        </p>
        <div className={styles.viewingEntriesContainer}>
          {dexEntries.entries.map((entry, index) => (
            <p key={index} className={styles.dexEntry}>
              [{index + 1}] - {entry.name ?? "?????"}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
