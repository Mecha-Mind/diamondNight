import React from 'react'
import styles from './SpecialHeading.module.css'
const SpecialHeading = ({title, desc}) => {
  return (
    <div className={styles.specialHeading}>
      <h2 className={styles["special-h"]}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default SpecialHeading