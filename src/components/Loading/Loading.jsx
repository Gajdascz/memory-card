import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <svg viewBox="0 0 100 100" className={styles.loader}>
        <circle className={styles.loaderCircle} cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
}
