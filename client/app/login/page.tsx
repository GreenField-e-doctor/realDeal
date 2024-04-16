'use client'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../lib/hook'; 
import { RootState } from '../lib/store';
import { login } from "../lib/features/userSlice";

interface LoginProps {
  changeView: (view: string) => void;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  const handleSignUp = () => {
    changeView('signup');
  };

  return (
    <div className="login-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '12px' }}>
      <div>
        <h2 style={{color:'white'}}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" style={{color:'white'}}>Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{color:'white'}}>Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required className="form-control" />
          </div>
          {error && <p style={{color:'red'}}>{error}</p>}
          <button type="submit" className="btn btn-primary">Login</button>
          <p>No account?</p>
          <button type="button" onClick={handleSignUp} className="btn btn-secondary">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
