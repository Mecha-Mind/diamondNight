import React, { Fragment } from 'react'
import styles from './page.module.css'
const SpecialHeading = ({title, text}) => {
  return (
    <Fragment>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </Fragment>
  )
}

export default SpecialHeading