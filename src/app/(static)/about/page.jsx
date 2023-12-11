import Image from 'next/image';
import styles from './page.module.css';
import React from 'react'
import Button from '@/elements/Button/Button';

export const metadata = {
  title: "Diamond Night - About",
  description: "Welcome To 'Diamond night' Discover best techs in the whole world!",
};




const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          fill={true}
          alt=""
          className={styles.img}
          />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, odit repudiandae? Repellendus pariatur ea, maiores quidem corporis ut quae dolores, ipsam neque dicta, aperiam odio facere cumque distinctio in rem.
            <br /><br />
          Ullam totam earum maxime a nam ad beatae quibusdam doloremque quos dolor aliquid veniam, in porro architecto explicabo, quis officia facilis? Nulla placeat quae maiores consectetur temporibus laborum nostrum sint!</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, odit repudiandae? ipsam neque dicta, aperiam odio facere cumque distinctio in rem.
          <br /><br />
          Ullam totam earum maxime  doloremque quos dolor aliquid veniam, maiores consectetur temporibus laborum nostrum sint!<br /><br />
          -Dynamic Websites <br/><br/>
          -Fast And Handy <br/><br/>
          -Mobile Apps</p>
          <Button url="/contact" title="Contact"/>
        </div>
      </div>
    </section>
  )
}

export default About