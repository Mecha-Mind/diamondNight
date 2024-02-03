"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
const Register = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };


  const [err, setErr] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // State for password input
  const [password, setPassword] = useState('');


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  try{
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
    res.status === 201 && router.push("/dashboard/login?success=Account Created")
  }catch(err){
    setErr(true)
  }
  }
  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>

        <h2>Register</h2>

        <div className={styles.inputBox}>
          <input 
            type="text" 
            className={styles.input}
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>

        <div className={styles.inputBox}>
          <input 
            type="text" 
            className={styles.input}
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
          Register
        </button>
      </form>
      {err && 'Oops.. Somthing went wrong!.'}
      <Link href={'/dashboard/login'} className={styles.login}>Login with an existing account</Link>
    </section>
  )
}

export default Register