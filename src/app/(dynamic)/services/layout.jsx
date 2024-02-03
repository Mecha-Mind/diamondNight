import React from 'react'
import styles from './page.module.css'

const Layout = ({children}) => {
  return (
    <section className={`${styles.container} container`}>
      <h1 className={styles.mainTitle}>Our Work</h1>
      {children}
    </section>
  )
}

export default Layout