import Image from 'next/image'
import styles from './footer.module.css'
import socialIcons from './data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.text}>©2023 Diamond Night. All rights reserved.</div>
      <div className={styles.socials}>
        {socialIcons.map(icon =>
          <Link key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer">
            <Image src={`/${icon.name}.png`} width={25} height={25} className={styles.social} alt={`${icon.name} account`}></Image>
          </Link>
        )}
      </div>
    </footer>
  )
}

export default Footer;