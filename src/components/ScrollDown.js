import React, { useState, useEffect } from 'react';

import down from '../Image/arrow_downward.svg'
import up from '../Image/arrow_upward.svg'

const ScrollDown = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
   const handleScroll = () => { 
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: scrollPosition - 700,
      behavior: 'smooth'
    });
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: scrollPosition + 600,
      behavior: 'smooth'
    });
  };

  return (
    <div>    
    <button
      className={`${
        showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } fixed bottom-4 right-[5%] transition-all duration-500 ease-in-out bg-black hover:bg-black text-white px-4 py-2 rounded-full z-10`}
      onClick={handleScrollUp}
    >
      <img src={up} width='20px' height='20px' />
    </button>
    <button
      className={`${
        showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } fixed top-4 right-[5%] transition-all duration-500 ease-in-out bg-black hover:bg-black text-white px-4 py-2 rounded-full z-10`}
      onClick={handleScrollDown}
    >
       <img src={down} width='20px' height='20px' />
    </button>
    </div>
  );

}
export default ScrollDown;


