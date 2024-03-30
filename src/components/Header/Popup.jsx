import React from 'react';
import styles from "./Popup.module.css"

const Popup = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p>Don't bother.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;