
import Link from 'next/link'
import Logo from '@/elements/Logo/Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faClock,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import Socials from '@/elements/socials/Socials';
import styles from './footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.box}>
          <Logo/>
          <Socials/>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            totam nihil.
          </p>
        </div>
        <div className={styles.box}>
          <ul className={styles.links}>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/privacyTerms">Privacy Terms</Link>
            </li>
            <li>
              <Link href="/Q&A">Q & A</Link>
            </li>
            <li>
              <Link href="#contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <div className={styles.line}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p className="info">Jumairah, United Arab Emirates</p>
          </div>
          <div className={styles.line}>
            <FontAwesomeIcon icon={faClock} />
            <p className="info">Business Hours:<br/>11:59AM To 11:59PM</p>
          </div>
          <div className={`${styles.line} ${styles.call}`}>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <div className={styles.info}>
              <span>+971 55 782 2086</span>
              <span>+02 011 56 555 102</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.copy}>
        <p className={styles.copyright}>Made With <span>&hearts;</span> By Diamond Night dev-team</p>
        <p>© All rights reserved 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
