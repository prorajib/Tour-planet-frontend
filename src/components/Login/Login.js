import React, { useState } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './Login.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    signInWithEmailAndPassword(auth, email, password);
    event.preventDefault();
  };

  return (
    <div>
      <Header></Header>
      <div className='login-container'>
        <div className='form-container'>
          <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleUserSignIn}>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type='email' id='' required />
              </div>
              <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input
                  onBlur={handlePasswordBlur}
                  type='password'
                  id=''
                  required
                />
              </div>
              <p style={{ color: 'red' }}>{error?.message}</p>
              {loading && <p>Loading...</p>}
              <input className='form-submit' type='submit' value='Login' />
            </form>
            <p>
              New to Tour Planet?{' '}
              <Link className='form-link' to='/signup'>
                Create an account
              </Link>
            </p>
            <h3>OR</h3>
            <button className='google-btn' onClick={() => signInWithGoogle()}>
              Signin Using Google
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
