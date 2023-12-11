"use client";
import styles from './menu.module.css'
import React ,{ useState } from 'react'
import links from '../../components/navbar/data'
import Link from 'next/link'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = ()=>{setIsMenuOpen(!isMenuOpen)};
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className={`${styles.menu} relative`}>
      <ul className={`${styles.burger} ${isMenuOpen?styles.activeBurger: ''}`} onClick={toggleMenu} id='burgerMenus'>
        <li className={styles.d1}></li>
        <li className={styles.d1}></li>
        <li className={styles.d1}></li>
      </ul>
      {/* if menu open show links */}
      {isMenuOpen && <div className={`${styles.menuLinks}`}>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.link} onClick={closeMenu}>
            {link.title}
          </Link>
        ))}
      </div>}
    </div>
  )
}

export default Menu