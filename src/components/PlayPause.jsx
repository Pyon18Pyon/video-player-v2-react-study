import React from 'react';
import './PlayPause.css';

const PlayPause = ({ onPlayPause, playing, onRewind, onFastForward }) => {
  return (
    <div className="play-controls">
      <i className="fas fa-backward" onClick={onRewind} title="Backward"></i>
      <i className={playing ? "fas fa-pause" : "fas fa-play"} onClick={onPlayPause} title={playing ? "Pause" : "Play"} id="play-btn"></i>
      <i className="fas fa-forward" onClick={onFastForward} title="Forward"></i>
    </div>
  );
};

export default PlayPause;