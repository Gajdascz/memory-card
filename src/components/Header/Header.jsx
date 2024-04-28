import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./Header.module.css";

export default function Header({ text, children }) {
  return (
    <header className={styles.appHeader}>
      <h1>{text}</h1>
      <div className={styles.buttonsContainer}>{children}</div>
    </header>
  );
}
