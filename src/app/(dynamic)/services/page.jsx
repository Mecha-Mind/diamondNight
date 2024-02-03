import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Diamond Night - Portfolio",
  description: "Welcome To 'Diamond night' Discover best techs in the whole world!",
};

const Services = () => {
  return (
    <section>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link
          href="/services/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/services/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/services/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </section>
  )
}

export default Services;