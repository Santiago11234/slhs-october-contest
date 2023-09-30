import React from 'react'
import styles from "../css/problem.module.css";

export default function scoreComponent( { team } ) {
  return (
    <div className={styles.problemContainer}>
    <div className={styles.problemInfo}>
      <h2>{team.teamName}</h2>
      <p>{team.division}</p>
    </div>

    <div className={styles.scoreInfo} >
      <h1>{team.score}</h1>
    </div>

  </div>
  )
}
