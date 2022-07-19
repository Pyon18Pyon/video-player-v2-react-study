import React from 'react';
import { PrettoSlider, ValueLabelComponent } from './PrettoSlider';
import './ProgressBar.css';

const ProgressBar = ({ played, onSeek, onSeekMouseDown, onSeekMouseUp, elapsedTime }) => {
  return (
    <div className="progress-range" title="Seek">
      {/* <div className="progress-bar"></div> */}
      <PrettoSlider
        min={0}
        max={100}
        value={played * 100}
        ValueLabelComponent={(props) => <ValueLabelComponent {...props} value={elapsedTime}/>}
        onChange={onSeek}
        onMouseDown={onSeekMouseDown}
        onChangeCommitted={onSeekMouseUp}
      />
    </div>

  );
};

export default ProgressBar;