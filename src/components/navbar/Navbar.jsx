
import styles from './navbar.module.css'
import Link from 'next/link'
import DarkMode from '../../elements/DarkModeToggle/DarkMode'
import links from './data'
import Logo from '../../elements/Logo/Logo'
import Menu from '@/elements/menu/Menu';

const Navbar = () => {
  
  return (
    <nav className={styles.container}>
      <Logo/>
      <Menu/>
      <div className={`${styles.links}`}>
        <DarkMode/>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar