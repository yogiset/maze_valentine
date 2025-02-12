import { useState, useRef } from 'react';

function BackgroundAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/Cute_Circus.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </>
  );
}

export default BackgroundAudio;