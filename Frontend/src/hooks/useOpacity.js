/* eslint-disable no-unused-expressions */
import { useState, useRef } from 'react';

function useOpacity() {
  const [opacity, setOpacity] = useState(false);
  const background = useRef(null);

  const changeNavBarOpacity = () => {
    window.scrollY > 0 ? setOpacity(true) : setOpacity(false);
  };

  const changeBackgroundOpacity = () => {
    if (background.current && ((1.0 - (window.scrollY / 100)) > 0.2)) {
      const scrollValue = (window.scrollY / 100).toFixed(1);
      background.current.style.opacity = 1.0 - scrollValue;
    }
  };

  window.addEventListener('scroll', () => {
    changeNavBarOpacity();
    changeBackgroundOpacity();
  });

  return { opacity, background };
}

export default useOpacity;
