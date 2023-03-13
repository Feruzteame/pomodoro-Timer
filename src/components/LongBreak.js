import React, { useState, useEffect } from 'react';
import Alarm from './Alarm'

function LongBreak({isActive, activateComponent}) {
   const [time, setTime] = useState(10 * 60);
  
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
        <p className='text-lg md:text-3xl italic text-[#1118279b]'> Long Break</p>
        <p className='self-center text-2xl md:text-3xl font-semibold'>{ `${minutes}:${seconds}` }</p>
        <button data-name='long-timer'
        className='px-4 py-1 bg-black text-white rounded hover:text-red-500'
        onClick={activateComponent}>
          { isActive ? 'Pause' : 'Start' }
          <Alarm alarmTime={time}/>
        </button>
      </div>
    </div>
  );
}

export default LongBreak;







// const [seconds, setSeconds] = useState(15 * 60); // 10 minutes in seconds
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   let interval = null;
  //   if (isActive && seconds > 0) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds - 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  // function toggle() {
  //   setIsActive(!isActive);
  // }

  // const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  // const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

  // return (
    // <div className='flex flex-col justify-between gap-5'>
    //   <p className='text-3xl italic text-[#1118279b]'> Long Break</p>
    //   <p className='self-center text-3xl font-semibold'>{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</p>
    //   <button
    //   className='px-4 py-1 bg-black text-white rounded'
    //   onClick={toggle}>
    //     {isActive ? 'Pause' : 'Start'}
    //   </button>
    // </div>
  // );