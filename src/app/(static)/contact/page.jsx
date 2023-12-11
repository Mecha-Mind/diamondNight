import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/elements/Button/Button';

export const metadata = {
  title: "Diamond Night - Contact us",
  description: "Welcome To 'Diamond night' Discover best techs in the whole world!",
};

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt="Contact Image"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
            className={styles.image}
            priority
          />
        </div>
        <form className={styles.form} id={styles.contacts} name={styles.contact}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="email" placeholder='email' className={styles.input} />
          <textarea className={styles.textArea} placeholder='message' cols="30" rows="10"></textarea>
          <Button url="#" title="Send"/>
        </form>
      </div>
    </section>
  )
}

export default Contact