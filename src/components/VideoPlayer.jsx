import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player'
import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';
import PlaybackSpeed from './PlaybackSpeed';
import TimeDuration from './TimeDuration';
import Fullscreen from './Fullscreen';
import screenfull from 'screenfull';
import './VideoPlayer.css';

const format = (seconds) => {
  if (isNaN(seconds)) {
    return '00:00';
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

const VideoPlayer = () => {

  // State
  const [state, setState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false
  });

  const [ timeDisplayFormat, setTimeDisplayFormat ] = useState('normal');

  // Ref
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  // Destructuring state value
  const { playing, muted, volume, playbackRate, played, seeking } = state;

  // Toggle between the state
  const handlePlayPause = () => {
    setState({ ...state, playing: !playing });
  };

  const handleRewind = () => {
    // Rewind 2s back
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 2);
  };

  const handleFastForward = () => {
    // Rewind 2s forward
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 2);
  };

  // Toggle the mute button
  const handleMute = () => {
    setState({ ...state, muted: !muted });
  };

  const handleVolumeChange = (e, newValue) => {
    setState({ ...state, volume: parseFloat(newValue/100), muted: newValue === 0 ? true : false});
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setState({ ...state, volume: parseFloat(newValue/100), muted: newValue === 0 ? true : false});
  };

  const handlePlaybackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  const handleProgress = (changeState) => {
    if (!seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100)})
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const handleChangeDisplayFormat = () => {
    setTimeDisplayFormat(timeDisplayFormat === 'normal' ? 'remaining' : 'normal');
  };

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : '00:00';
  const duration = playerRef.current ? playerRef.current.getDuration() : '00:00';

  const elapsedTime = timeDisplayFormat === 'normal' ? format(currentTime) : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);

  const handleEnded = () => {
    setState({ ...state, playing: false });
  };

  return (
    <div ref={playerContainerRef} className="player">
      <ReactPlayer
        ref={playerRef}
        width="100%"
        height="auto"
        url="https://pixabay.com/videos/download/video-41758_source.mp4?attachment"
        playsInline={true}
        muted={muted}
        playing={playing}
        volume={volume}
        playbackRate={playbackRate}
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
      {/* Show Controls */}
      <div className="show-controls">
        {/* Controls Container */}
        <div className="controls-container">
          <ProgressBar 
            played={played}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            elapsedTime={elapsedTime}
          />
          <div className="control-group">
            {/* Left Controls */}
            <div className="controls-left">
              <PlayPause 
                onPlayPause={handlePlayPause} 
                playing={playing} 
                onRewind={handleRewind}
                onFastForward={handleFastForward}
              />
              <Volume 
                muted={muted}
                onMute={handleMute}
                onVolumeChange={handleVolumeChange}
                onVolumeSeekUp={handleVolumeSeekUp}
                volume={volume}
              />
            </div>
            {/* Right Controls */}
            <div className="controls-right">
              <PlaybackSpeed 
                onPlaybackRateChange={handlePlaybackRateChange}
              />
              <TimeDuration 
                elapsedTime={elapsedTime}
                totalDuration={totalDuration}
                onChangeDisplayFormat={handleChangeDisplayFormat}
              />
              <Fullscreen 
                onToggleFullScreen = {toggleFullScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
