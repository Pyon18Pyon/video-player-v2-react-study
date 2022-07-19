import React from 'react';
import './PlaybackSpeed.css';

const rates = [
  {
    label: '0.5 x',
    value: '0.5'
  },
  {
    label: '0.75 x',
    value: '0.75'
  },
  {
    label: '1 x',
    value: '1'
  },
  {
    label: '1.5 x',
    value: '1.5'
  },
  {
    label: '2 x',
    value: '2'
  },
];

const PlaybackSpeed = ({ onPlaybackRateChange }) => {

  

  return (
    <div className="speed" title="Playback Rate">
      {/* <select name="playbackRate" defaultValue="1" className="player-speed" onClick={(event) => onPlaybackRateChange(+event.target.value)}>
        <option value="0.5" >0.5 x</option>
        <option value="0.75">0.75 x</option>
        <option value="1">1 x</option>
        <option value="1.5">1.5 x</option>
        <option value="2">2 x</option>
      </select> */}
      <select defaultValue="1" onClick={(event) => onPlaybackRateChange(+event.target.value)}>
        {rates.map(({ label, value }) => (
          <option 
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlaybackSpeed;