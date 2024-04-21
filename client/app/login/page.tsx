"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../lib/hook';
import { RootState } from '../lib/store';
import { login, setError } from "../lib/features/userSlice";
import Link from 'next/link';
import styles from '../styles/Login.module.css';

interface LoginProps {
  changeView?: (view: string) => void;
}

const Login: React.FC<LoginProps> = ({ changeView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    dispatch(login({ email, password }))
      .unwrap()
      .then((user) => {
        window.location.href = '/homepage'; // Use Next.js router if inside SPA
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Check if error detail is available and update state accordingly
        if (error.message) {
          dispatch(setError(error.message)); // Update Redux state with more specific error
        } else {
          console.error('Unexpected error structure:', error);
          dispatch(setError('Login failed with unexpected error format'));
        }
      });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={styles.inputField}
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.submitButton}>Login</button>
          <p className={styles.text}>No account?</p>
          <Link href="/signUp" className={styles.changeViewButton}>Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
