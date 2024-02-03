import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styles from './socials.module.css'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Socials = () => {
  const facebookLink = "https://www.facebook.com/diamondnight.co?mibextid=LQQJ4d";
  const instagramLink = "https://www.instagram.com/diamondnight.uae?igsh=cTMwbTVyMWF5a3lq";
  return (
    <>
      <ul className={styles.social}>
            <li>
              <Link href={facebookLink} className={styles.facebook} target="_blank" rel="noopener noreferrer" title='visit our facebook'>
                <FontAwesomeIcon icon={faFacebookF}/>
              </Link>
            </li>
            <li>
              <Link href={instagramLink} className={styles.instagram} target="_blank" rel="noopener noreferrer" title='visit our instagram'>
                <FontAwesomeIcon icon={faInstagram}/>
              </Link>
            </li>
          </ul>
    </>
  )
}

export default Socials