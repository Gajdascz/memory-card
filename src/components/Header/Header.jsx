import Icon from "../Icon/Icon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>Memory Card</h1>
      <div className={styles.buttonContainer}>
        <Icon type={"questionMark"} />
      </div>
    </header>
  );
}
