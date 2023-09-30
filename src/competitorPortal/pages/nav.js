import React, { useState } from 'react';
import styles from '../../preLogin/css/login.module.css';

export default function Nav({ setPage, showNotification }) {
  const [openModal, setOpenModal] = useState(false);


  function functionSetPage(page) {
    setPage(page);
  }

  return (
    <div className={styles.nav} style={{ boxShadow: "0 0px 10px rgba(0, 0, 0, 0.2)" }}>
      <div className={styles.iconContainer}>
        <span className={styles.name} onClick={() => functionSetPage("leaderboard")}>Leaderboard</span>
      </div>

      <div className={styles.iconContainer}>
        <span className={styles.name} onClick={() => functionSetPage("competitionPortal")}>Problems</span>
      </div>

      <div className={styles.iconContainer}>
        <span className={styles.name} onClick={() => functionSetPage("clarifications")}>
          Clarifications
          {showNotification && (
            <div className={styles.notificationCircle}></div>
          )}
        </span>
      </div>

      <span className={styles.name} onClick = { () =>  setOpenModal(true)}>Log Out</span>
        {openModal && (
          <div className={styles.modal}>
            <p className={styles.modalTitle}>Are You Sure</p>
            <div className={styles.modalButtons}>
            <button
              onClick={() => {
                // log out
              }}
              className={styles.modalBtn + ' ' + styles.modalBtnYes}
            >
              Yes
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className={styles.modalBtn + ' ' + styles.modalBtnNo}
            >
              No
            </button>
            </div>
          </div>
          
        
        )}

    </div>
  );
}
