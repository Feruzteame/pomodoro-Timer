import React, { useState, useEffect } from 'react';
import Alarm from './Alarm'

function ShortBreak({isActive, activateComponent}) {
  const [time, setTime] = useState(5 * 60);

   useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  return (
    <div>
      <div className='flex flex-col justify-between gap-5'>
        <p className='text-lg md:text-3xl italic text-[#1118279b]'> Short Break</p>
        <p className='self-center text-2xl md:text-3xl font-semibold'>{ `${minutes}:${seconds}` }</p>
        <button data-name='short-timer'
        className='px-4 py-1 bg-black text-white rounded hover:text-red-500'
        onClick={activateComponent}>
          { isActive ? 'Pause' : 'Start' }
        </button>
        {/* <Alarm alarmTime={time}/> */}
      </div>
    </div>
  );
}

export default ShortBreak;