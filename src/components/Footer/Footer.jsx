import styles from "./Footer.module.css";
import Icon from "../Icon/Icon";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <div className={styles.copyrightIconYear}>
          <Icon type="copyright" className={styles.copyrightIcon} />
          <p className={styles.copyrightYear}>2024</p>
        </div>
        <p className={styles.author}>Nolan Gajdascz</p>
      </div>
      <p className={styles.disclaimer}>
        Pokémon and Pokémon character names are trademarks of Nintendo.
      </p>
    </footer>
  );
}
