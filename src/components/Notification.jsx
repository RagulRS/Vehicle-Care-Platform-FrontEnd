import React from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
};

export default Notification;
