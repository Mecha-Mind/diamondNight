import React from 'react'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import styles from './contact.module.css'
import SpecialHeading from '@/elements/specialHeadingHome/SpecialHeading'
import Link from 'next/link'

const Contact = () => {
  const emailLink = 'mailto:info.diamondnight.uae@gmail.com';
  const whatsappLink = 'https://api.whatsapp.com/send?phone=phone-number';
  const messengerLink = 'https://m.me/facebook-name';
  return (
    <section className={styles.contact} id='contact'>
      <SpecialHeading title={'Contact Us'} desc={"Let's keep in touch"}/>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <article className={`${styles.article} ${styles.email}`}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <h3>email</h3>
            <Link href={emailLink} target="_blank" rel="noopener noreferrer" title='contact us throw email'>
                send email
            </Link>
          </article>
          <article className={`${styles.article} ${styles.whatsapp}`}>
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
            <h3>whatsapp</h3>
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" title='contact us throw whatsapp'>
                send whatsapp
            </Link>
          </article>
          <article className={`${styles.article} ${styles.messenger}`}>
            <FontAwesomeIcon icon={faFacebookMessenger} className={styles.icon} />
            <h3>messenger</h3>
            <Link href={messengerLink} target="_blank" rel="noopener noreferrer" title='contact us throw messenger'>
                send messenger
            </Link>
          </article>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact