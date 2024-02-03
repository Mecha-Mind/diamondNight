"use client"

import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from './darkMode.module.css'
import { ThemeContext } from '@/context/ThemeContext'
const DarkMode = () => {
  const {toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.mainContainer} onClick={toggle}>
      {mode === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className={styles.icon} />
      ) : (
        <FontAwesomeIcon icon={faSun} className={styles.icon} />
      )}
      
    </div>
  )
}

export default DarkMode