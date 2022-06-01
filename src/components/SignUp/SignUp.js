import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Your passwords did not match!!');
    } else if (password.length < 6) {
      setError('Password must be  6 characters or long!!');
    }
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    console.log(user);
    navigate('/about');
  }
  return (
    <div>
      <Header></Header>
      <div className='signup-container'>
        <div className='form-container'>
          <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input
                  onBlur={handleEmailBlur}
                  type='email'
                  name='email'
                  id=''
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input
                  onBlur={handlePasswordBlur}
                  type='password'
                  name='password'
                  id=''
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input
                  onBlur={handleConfirmPasswordBlur}
                  type='password'
                  name='confirm-password'
                  id=''
                />
              </div>
              <p style={{ color: 'red' }}>{error}</p>
              <input
                className='form-submit'
                type='submit'
                value='Sign Up'
                required
              />
            </form>
            <p>
              Already Have an account?{' '}
              <Link className='form-link' to='/login'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
