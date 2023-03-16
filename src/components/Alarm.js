import React, { useState, useEffect } from 'react';

const Alarm = ({ alarmTime }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let intervalId;

    if (alarmTime === 0) {
      setPlaying(true);
    }

    return () => {
      clearInterval(intervalId);
    };
  });

  const stopAlarm = () => {
    setPlaying(false);
  };

  return (
    <div>
      {playing ? <audio autoPlay src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" /> : null}
      {playing ? <button onClick={stopAlarm}>Stop Alarm</button> : null}
    </div>
  );
};

export default Alarm;