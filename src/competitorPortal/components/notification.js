import React from 'react'
import styles from "../css/notification.module.css";

export default function Notification( { notification, setPage} ) {

  return (
    <div className={styles.notieBody} onClick={() => setPage("clarifications")}>
        <div className={styles.notieTitle}>
            {notification.title}
        </div>

        <div className={styles.notieContent}>
            {notification.content}
        </div>

        <div className= {styles.notieBar}>
            <div className={styles.notieDone}>

            </div>
        </div>
    </div>
  )
}
