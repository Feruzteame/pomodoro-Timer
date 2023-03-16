import React, { useState, useEffect } from 'react';

import ShortBreak from './ShortBreak'
import LongBreak from './LongBreak'
import TodoList from './TodoList'
import CurrentDateTime from './CurrentDateTime'
import Spotify from './Spotify'
import ScrollDown from './ScrollDown'
import Alarm from './Alarm';

import Tomato from '../Image/tomato.svg'
import Reset from '../Image/refresh.svg'

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(30 * 60);
 
  const [isShortTimerActive, setShortTimerActive] = useState(false);
  const [isLongTimerActive, setLongTimerActive] = useState(false);
  const [isActive, setActive] = useState(false);


  const activateComponent = function(event) {
      const child_name = event.target.dataset.name

      if ('short-timer' === child_name) {
        setShortTimerActive(!isShortTimerActive)

        setLongTimerActive(false)
        setActive(false)
      }

      if ('long-timer' === child_name) {
        setLongTimerActive(!isLongTimerActive)

        setShortTimerActive(false)
        setActive(false)
      } 

      if ('base-timer' === child_name) {
        setActive(!isActive)

        setShortTimerActive(false)
        setLongTimerActive(false)
      } 
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function reset() {
    setSeconds(30 * 60);
    setActive(false);
  }

  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

  return (
    <div className='flex flex-col justify-center md:gap-10 font-serif'>
      <div className='flex flex-col p-5 md:p-0 md:flex-row md:justify-between w-full md:bg-red-400'>
        <CurrentDateTime/>
        <p className='hidden md:flex self-center content-end w-auto md:pt-5 text-lg md:text-4xl'>
          P<img src={ Tomato } className='w-9 h-9 animate__animated animate__jello animate__infinite'></img>modoro Timer
        </p>
        <button className='p-5 self-center md:self-end w-20 h-20 md:w-auto md:h-auto rounded-full md:rounded md:rounded-l-full -none bg-red-400 md:bg-white text-slate-500 hover:text-red-500 hover:underline' onClick={reset}>
          <img src={Reset} className='w-8 h-8' /> <span className='hidden md:flex'>Reset</span>
        </button>
      </div>
      <ScrollDown/>
      <div className="flex flex-col  md:self-center gap-10 md:gap-10 p-5 m-10 md:p-10 sm:w-[90%] md:w-[60%] backdrop-blur-[20px] bg-red-400 md:rounded-xl shadow-lg shadow-gray-400" >
        <div className='flex justify-around ' >
          <ShortBreak isActive={isShortTimerActive} activateComponent={activateComponent}/>
          <LongBreak isActive={isLongTimerActive} activateComponent={activateComponent}/>
        </div>
        <div className='flex flex-col gap-5 '>
          <h1 className='self-center text-5xl text-white font-semibold'>
            {`${minutes}:${remainingSeconds}`}
          </h1>
          <button data-name='base-timer'
          className='self-center w-[100px] px-4 py-1 bg-black text-white rounded hover:text-red-500'
          onClick={activateComponent}>{isActive ? 'Pause' : 'Start'}
          </button>
          {/* <Alarm alarmTime={seconds}/> */}
        </div>
        <Spotify/>
      </div>
        <TodoList/>
    </div>
  );
};

export default CountDownTimer;