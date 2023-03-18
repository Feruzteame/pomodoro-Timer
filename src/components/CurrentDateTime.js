import React, { useState, useEffect } from "react";
//import Alarm from './Alarm'

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let currentMonth = currentDateTime.toLocaleString('default', { month: 'long' });
  let currentDay = currentDateTime.toLocaleString('default', { day: 'numeric' });
  let currentHour = currentDateTime.getHours();
  let currentMinute = currentDateTime.getMinutes();
  let dayName = currentDateTime.toLocaleString("default", { weekday: "long" });

  function timeFormat (){
    if (currentHour   < 10) {currentHour   = "0"+currentHour;}
    if (currentMinute < 10) {currentMinute = "0"+currentMinute;}
    const amPm = currentHour < 12 ? 'AM' : 'PM';
    return currentHour+':'+currentMinute+' '+ amPm
  }

  return (
    <div className='flex flex-col justify-center w-full md:w-auto md:p-5 md:rounded-r-full bg-white'>
      <div className='hidden md:flex font-semibold'>{dayName} {currentDay} {currentMonth}</div>
      <p className='hidden md:flex text-slate-500'>{timeFormat()}</p>
    </div>
  );
}

export default CurrentDateTime;
