"use client"

import React, { useEffect, useState } from 'react'
import styles from './scrollToTop.module.css'

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{window.removeEventListener('scroll', handleScroll)}
    
  },[])

  const scrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    isVisible && (
      <button className={styles.scrollToTop} onClick={scrollToTop}>
        ↑
      </button>
    )
  )
}

export default ScrollToTop