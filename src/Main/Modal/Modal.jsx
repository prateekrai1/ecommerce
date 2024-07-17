import React, { useState } from 'react'
import './Modal.css'
import Login from '../Forms/Login/Login';
const Modal = ({isVisible,onClose}) => {

    const [isLogin, setIsLogin] = useState(true);

    if (!isVisible) return null;
    return (
      <div className="modal-container">
        <div className="modal">
        <Login/>
        <button onClick={onClose} className='close-button'>Close</button>
        </div>
      </div>
    );
}

export default Modal