import './styles/App.css';
import React from 'react';
import Vector from './assets/Vector.png';
import LoginForm from './components/LoginForm'; 

function App() {
  return (
    <div className='App'>
        <img className='vector' src={Vector} alt='cart icon' />
        <div className='circle-container'>
          <div className='circle'>
          </div>
          <div className='circle'>
          </div>
          <div className='circle'>
          </div>
        </div>
       <LoginForm />
    </div>
  );
}

export default App;

