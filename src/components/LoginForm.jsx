import '../styles/LoginForm.css';
import userIcon from '../assets/userIcon.png';
import lockIcon from '../assets/lockIcon.png';
import cartIcon from '../assets/cartIcon.png';
import Popup from './Popup';
import React, { useState } from 'react';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('')
  const allowedUser = 'test@luxpmsoft.com'
  const allowedPassword = 'test1234!'

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    if(password === '') setStatus('')
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/;

    if(username === '' || password === '') return;

    if (username=== allowedUser && password === allowedPassword) {
      // Case where correct credentials are provided
      window.location.href = 'about:blank';
    } else if(username === allowedUser && password !== allowedPassword) {
        // Case where incorrect password is provided
        if(!passwordRegex.test(password)) {
          // Case where password doesn't match the regex
          setStatus('providedPasswordRegexIssue');
        }
        else {
          // case where password matches regex but isn't correct
          setStatus('providedWrongCredentials')
        }
    } else if(username !== allowedUser) {
      setStatus('providedWrongUsername');
    }
        
    setPassword('');
  };

  const closePopup = () => {
    setStatus('');
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <img className='cart-icon' src={cartIcon} alt='cart icon' />
        <div className='input-container'>
          <img src={userIcon} alt='User icon' />
          <input
            type='text'
            id='username'
            value={username}
            autoComplete='off'
            onChange={handleUsernameChange}
            placeholder='Username'
          />
        </div>
        <div className='input-container'>
          <img src={lockIcon} alt='Passowrd icon' />
          <input
            type='password'
            id='password'
            value={password}
            autoComplete='off'
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        </div>
        <div>
          {status === 'providedPasswordRegexIssue' &&<h4 className='errors'>Wrong combination, Your password must use numbers, letters and special characters</h4>}
          {status === 'providedWrongUsername' &&<h4 className='errors'>We couldn't find anyone with this username</h4>}
        </div>
        <button type='submit'>Login</button>
        <h3>Forgot password?</h3>
      </form>
        {status === 'providedWrongCredentials' && (
          <Popup closePopup={closePopup} message={'the provided password is wrong'} />
        )}
    </div>
  );
};

export default LoginForm

