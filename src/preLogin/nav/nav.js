import React from 'react'
import styles from '../css/login.module.css'

export default function nav( { setOpenLogin}) {
  return (
    <div className={styles.nav} style={{ boxShadow: "0 0px 10px rgba(0, 0, 0, 0.2)" }}>
    <div className={styles.iconContainer}>
      <span className={styles.name} onClick =  { () => setOpenLogin(false) }>SLHS Contest</span>
    </div>
    <div className={styles.iconContainer} >
    
    <span className={styles.name} onClick =  { () => setOpenLogin(true) }>Log In</span>
    </div>
  </div>
  )
}
