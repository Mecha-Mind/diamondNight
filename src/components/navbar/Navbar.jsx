"use client"
// Import necessary libraries and components
import Darkmode from '@/elements/DarkModeToggle/DarkMode';
import Logo from '@/elements/Logo/Logo';
import { useState, useEffect } from 'react';  // Import useEffect
import Link from 'next/link';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // useEffect to add an event listener for scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };
  

  return (
    <header className={`${styles.header} ${scrolling ? styles.scrolling : ''}`}>
      {/* Add styles.scrolling to apply styles when scrolling */}
      <div className={`${styles.container} container`}>
        <Logo />
        <nav className={styles.nav}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          {data.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className={`${styles.link} ${styles.active}`} onClick={handleNavLinkClick}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
            <Darkmode />
        </nav>
      </div>
    </header>
  );
};


export default Navbar;
