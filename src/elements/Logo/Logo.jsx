import React from 'react'
import Link from 'next/link'
import styles from './logo.module.css'
import { Inter } from "next/font/google";
const inter = Inter(
  { 
    subsets: ["latin"],
    weight : ['800'],
  }
  );
const Logo = () => {
  return (
    <Link href="/" className={`${styles.logo} ${inter.className}`}>Diamond Night</Link>
  )
}

export default Logo