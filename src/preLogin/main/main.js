import React from 'react';
import styles from '../css/login.module.css';
import Login from './login';
import ParticleBackground from './particelBackground'; 

export default function Main({ openLogin, goToHome }) {
  return (
    <div className={styles.mainContainer}>
      {openLogin ? (
        <Login goToHome={goToHome} />
      ) : <ParticleBackground />}
    </div>
  );
}
