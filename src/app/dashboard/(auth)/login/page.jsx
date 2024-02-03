"use client"
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const Login = () => {
  // State for email input
  const [email, setEmail] = useState('');
  // State for password input
  const [password, setPassword] = useState('');
  // password icon toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const session = useSession();
  const router = useRouter();

  const validateEmail = () => {
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    // Basic password length check
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    // Redirect to "/dashboard" after the component has been rendered
    if (session.status === 'authenticated') {
      router?.push('/dashboard');
    }
  }, [session.status, router]);

  if(session.status === "loading"){
    return <p className={styles.loading}>Loading...</p>
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password before submitting
    validateEmail();
    validatePassword();

    // Check for validation errors
    if (emailError || passwordError) {
      // If there are errors, return early and do not proceed with signIn
      return;
    }
    signIn("credentials",{email,password})
  }
  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.inputBox}>

          <input 
            className={styles.input}
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <label>Email</label>

          {emailError && <p className={styles.emailError}>{emailError}</p>}
        </div>

        <div className={styles.inputBox}>
        <div className="pass">
            <input 
              type={isPasswordVisible ? 'text' : 'password'}
              className={styles.input}
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            <button onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
            </button>
          </div>
          <label>Password</label>

          {passwordError && <p className={styles.passwordError}>{passwordError}</p>}
        </div>
        
        <button className={styles.btn}>
          <span></span>  
          <span></span>  
          <span></span>  
          <span></span>  
          Login
        </button>
      </form>
      <button onClick={()=>signIn("google")} className={styles.google}>Login with google</button>
    </section>
  )
}

export default Login