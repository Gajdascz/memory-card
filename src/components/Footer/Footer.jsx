import styles from "./Footer.module.css";

const PixelCopyrightIcon = () => (
  <svg className={styles.icon} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M9 6H13V7H14V9H12V8H10V14H12V13H14V15L13 15L13 16H9V15H8V7L9 7L9 6Z" />
  </svg>
);

const GhIconLink = () => (
  <a className="button" href="https://github.com/Gajdascz" target="_blank" rel="noopener noreferrer">
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9" />
    </svg>
  </a>
);

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyrightContent}>
        <PixelCopyrightIcon />
        <p>2024</p>
        <p>Nolan Gajdascz</p>
      </div>
      <GhIconLink />
    </footer>
  );
}
