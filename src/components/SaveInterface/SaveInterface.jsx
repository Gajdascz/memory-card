import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "./SaveInterface.module.css";
import { save, importSave, clearSave, getSaveStr, sub, unsub } from "../../apis/saveData";

SaveInterface.propTypes = {
  getSaveData: PropTypes.func,
  onSync: PropTypes.func,
};

export default function SaveInterface({ getSaveData, onSync }) {
  const downloadRef = useRef();
  const [data, setData] = useState(getSaveStr());

  useEffect(() => {
    sub(setData);
    return () => unsub(setData);
  }, []);

  useEffect(() => {
    let url;
    if (data && data.length > 0) {
      const blob = new Blob([data], { type: "application/json" });
      url = URL.createObjectURL(blob);
      downloadRef.current.href = url;
      downloadRef.current.download = "data.json";
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [data]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => save(getSaveData())}>
        Save
      </button>

      {data && data.length > 0 && (
        <a className={styles.button} ref={downloadRef}>
          Export
        </a>
      )}
      <label className={styles.button} htmlFor="save-import">
        Import
        <input
          id="save-import"
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
              await importSave(file);
              onSync();
            } catch (error) {
              console.error("Error importing file:", error);
            }
          }}
          accept=".json"
        />
      </label>
      <button
        className={`${styles.button} ${styles.resetButton}`}
        onClick={() => {
          clearSave();
          onSync();
        }}
      >
        Reset
      </button>
    </div>
  );
}
