"use client"
import React from 'react'
import styles from '../Button/button.module.css'
import Link from 'next/link'
const ContactButton = () => {
  const handleClick = (e)=>{e.preventDefault();}
  return (
    <Link  href='#' legacyBehavior>
      <button className={styles.container} onClick={handleClick} >Send</button>
    </Link>
  )
}

export default ContactButton