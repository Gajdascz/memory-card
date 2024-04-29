import styles from "./Footer.module.css";
import Icon from "../Icon/Icon";

const GhIconLink = () => (
  <a
    className="button"
    href="https://github.com/Gajdascz"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon type="gitHub" />
  </a>
);

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyrightContent}>
        <div className={styles.copyrightIconYear}>
          <Icon type="copyright" className={styles.copyrightIcon} />
          <p className={styles.copyrightYear}>2024</p>
        </div>
        <p className={styles.author}>Nolan Gajdascz</p>
      </div>
    </footer>
  );
}
