"use client"

import React, { useContext } from 'react'
import './darkMode.module.css'
import styles from './darkMode.module.css'
import { ThemeContext } from '@/context/ThemeContext'
const DarkMode = () => {
  const {toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.mainContainer} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball}
        style={mode==="light"?{left:"2px"}:{right:"2px"}}
      />
    </div>
  )
}

export default DarkMode