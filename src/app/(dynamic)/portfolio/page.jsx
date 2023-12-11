import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Diamond Night - Portfolio",
  description: "Welcome To 'Diamond night' Discover best techs in the whole world!",
};

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link 
        href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </section>
  )
}

export default Portfolio;