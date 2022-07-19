import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PrettoSlider } from './PrettoSlider';
import './Volume.css';


const Slider = withStyles({
  root: {
    color: 'var(--primary-color)',
    height: 15,
    marginLeft: 10
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: 'var(--primary-color)',
    border: '2px solid currentColor',
    marginTop: -4,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 6,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
  },
})(PrettoSlider);


const Volume = ({ muted, onMute, onVolumeChange, onVolumeSeekUp, volume }) => {
  return (
    <div className="volume">
      <div className="volume-icon">
        <i className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"} onClick={onMute} title="Mute" id="volume-icon"></i>
      </div>
      <div className="volume-range" title="Change Volume">
        {/* <div className="volume-bar" ></div> */}
        <Slider 
          min={0}
          max={100}
          volume={volume * 100}
          onChange={onVolumeChange}
          onChangeCommitted={onVolumeSeekUp}
        />
      </div>
    </div>
  );
};

export default Volume;
