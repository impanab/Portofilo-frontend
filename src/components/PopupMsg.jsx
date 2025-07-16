import React, { useEffect } from 'react';
import './css/Popup.css';

const PopupMsg = ({ isOpen, closePopup, msg, style }) => {
  useEffect(() => {
    if (isOpen && style === 'popup') {
      const timer = setTimeout(() => {
        closePopup();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, style, closePopup]);

  return (
    <>
      {isOpen && (
        <div className={`toast-container ${style}`} role="alert">
          <p>{msg}</p>
          {style === 'alert' && (
            <button onClick={closePopup} className="toast-btn">✖</button>
          )}
        </div>
      )}
    </>
  );
};

export default PopupMsg;
