/* eslint-disable no-unused-expressions */
import { useState } from 'react';

function useOpacity() {
  const [opacity, setOpacity] = useState(false);

  const changeOpacity = () => {
    window.scrollY > 0 ? setOpacity(true) : setOpacity(false);
  };

  window.addEventListener('scroll', changeOpacity);

  return { opacity };
}

export default useOpacity;
