import Icon from "../Icon/Icon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>Memory Card</h1>
      <div className={styles.buttonContainer}>
        <button className="button">
          <Icon type={"sound"} />
        </button>
        <button className="button">
          <Icon type={"music"} />
        </button>
        <button className="button">
          <Icon type={"questionMark"} />
        </button>
      </div>
    </header>
  );
}
