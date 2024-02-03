import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <Link href="/" className={`${styles.logo}`}>
      <FontAwesomeIcon icon={faGem} className={styles.linkSvg}/> Diamond Night
    </Link>
  )
}

export default Logo