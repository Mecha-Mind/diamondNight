import React from 'react'
import SpecialHeading from '@/elements/specialHeadingHome/SpecialHeading'
import styles from './aboutUs.module.css'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <section className={styles.about} id="about">
      <SpecialHeading title={'About us'} desc={"Get to know"}/>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h3>Welcome to <span className={styles.aboutHeader}>Diamond Night Co.</span></h3>
          <p>For business management services in Dubai and the Gulf<br/>
          We are proud to provide our various and distinguished services in the Middle East and Gulf markets by providing advanced solutions and effective management systems. With the advancement of technology and development in the digital world, there is nothing better than building, establishing, and developing your brand with all unprecedented professionalism.
          </p>
          <div className={styles.aboutBtns}>
            <Link href={"/"}>Know More</Link>
            <Link href={'#contact'}>Contact us</Link>
          </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.image}>
              <div className={styles.inner}>
                <Image width={200} height={200} src="/business.png" alt="business" priority/>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.inner}>
                <Image width={200} height={200} src="/erp.png" alt="erp" priority/>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.inner}>
                <Image width={200} height={200} src="/web.png" alt="web" priority/>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.inner}>
                <Image width={200} height={200} src="/fullDigital.png" alt="fullDigital" priority/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs