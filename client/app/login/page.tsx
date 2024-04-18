'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../lib/hook';
import { RootState } from '../lib/store';
import { login } from "../lib/features/userSlice";
// import Link from 'next/link';
import styles from '../styles/Login.module.css';

interface LoginProps {
  changeView?: (view: string) => void;
}

const Login: React.FC<LoginProps> = ({ changeView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state: RootState) => state.user.user);
  const error = useSelector((state: RootState) => state.user.error);
  const dispatch = useAppDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Dispatch the login action and await the response
      const response = await dispatch(login({ email, password })).unwrap();

      // Check the response to ensure login was successful
      if (response.user) {
        // If login is successful, redirect to the homepage
        window.location.href = '/homepage';
      } else {
        // Handle cases where login is not successful but no error thrown
        console.log('Login failed: No error thrown, check your login logic.');
      }
    } catch (error) {
      // Handle any errors from login process
      console.error('Login failed:', error);
    }
  };

 

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required className={styles.inputField} />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.submitButton}>Login</button>
          
          <p className={styles.text}>No account?</p>
          <button type="button" onClick={() => window.location.href = '/signUp'} className={styles.changeViewButton}>
  Sign Up
</button>        </form>
      </div>
    </div>
  );
};

export default Login;
