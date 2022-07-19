import React from 'react';
import './TimeDuration.css';

const TimeDuration = ({ elapsedTime, totalDuration, onChangeDisplayFormat }) => {
  return (
    <div className="time">
      <span onClick={onChangeDisplayFormat} className="time-elapsed">{`${elapsedTime} /` }</span>
      <span className="time-duration">{totalDuration}</span>
    </div>
  );
};

export default TimeDuration;