import React from 'react'
import styles from './landing.module.css'
import Image from 'next/image'
import Socials from '@/elements/socials/Socials'
import HomeImage from '../../../public/HOME.png'
const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.wrapper}>
        <Image 
          fill={true}
          src={HomeImage} 
          alt="HOME" 
          priority
          />
        <div className={styles.content}>
          <h2>Welcome to Diamond Night Co.</h2>
          <p>For business management services in Dubai and the Gulf</p>
        </div>
        <div className={styles.landingSocials}>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Landing