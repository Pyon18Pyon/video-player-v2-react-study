import React from 'react';
import './Fullscreen.css';

const Fullscreen = ({ onToggleFullScreen }) => {
  return (
    <div className="fullscreen">
      <i className="fas fa-expand" onClick={onToggleFullScreen}></i>
    </div>
  );
};

export default Fullscreen;