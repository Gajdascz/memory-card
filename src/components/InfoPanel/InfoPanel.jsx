import PropTypes from "prop-types";
import styles from "./InfoPanel.module.css";

export default function InfoPanel({ headerText, buttons, children }) {
  return (
    <header className={styles.container}>
      <h1 className={styles.headerText}>{headerText}</h1>
      <div className={styles.buttonsContainer}>{buttons}</div>
      {children}
    </header>
  );
}
