import React from 'react';
import '../styles/Popup.css';
import closeIcon from '../assets/closeIcon.png';


const Popup = (props) => {
  return (
    <div className='popupContainer'>
        <div className='popupContent'>
            <div className='close-icon'>
                <img src={closeIcon} onClick={props.closePopup} alt='close icon' />
            </div>
            <p>{props.message}</p>
        </div>
    </div>
  );
};

export default Popup;