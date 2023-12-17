

import styles from './button.module.css'
import Link from 'next/link'


const Button = ({ title, url }) => {

  return (
    <Link href={url}>
      <button className={styles.container} >
        {title}
      </button>
    </Link>
  )
}

export default Button