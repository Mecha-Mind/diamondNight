"use client"
import React, { Fragment } from 'react'
import styles from './logout.module.css'
import { signOut, useSession } from 'next-auth/react'

const Logout = () => {
  const session = useSession()
  return (
    <Fragment>
      {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>Logout</button>
        )
      }
    </Fragment>
  )
}

export default Logout