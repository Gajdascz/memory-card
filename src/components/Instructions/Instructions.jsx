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
          <h2 className={styles.sectionHeader}>Interface</h2>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeader}>Info Bar</h3>
            <div className={styles.subsectionContent}>
              <p></p>
            </div>
          </div>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeader}>Game Board</h3>
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
