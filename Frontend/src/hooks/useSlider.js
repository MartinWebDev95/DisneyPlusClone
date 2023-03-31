import { useEffect, useState } from 'react';

function useSlider({ externalRef = null }) {
  // State que se actualiza cada vez que el mouse entra y sale del slider container
  const [isEnter, setIsEnter] = useState(false);
  const valueTranslate = 2.5;
  let interval;

  const handleClickNext = () => {
    // Se obtiene el primer elemento del slider
    const firstElement = externalRef?.current.childNodes[0];

    // Se traslada el slider
    externalRef.current.style.transition = 'all .3s ease-in-out';
    externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;

    // Cuando la transición termine se ejecuta esta función que mueve el
    // primer elemento del slider al final para así crear un slider infinito
    const finishTransition = () => {
      externalRef.current.style.transition = 'none';
      externalRef.current.style.transform = 'translateX(0%)';

      externalRef.current.appendChild(firstElement);

      externalRef.current.removeEventListener('transitionend', finishTransition);
    };

    externalRef.current.addEventListener('transitionend', finishTransition);
  };

  const handleClickPrevious = () => {
    // Se obtiene el último elemento del slider
    const lastElement = externalRef.current.childNodes[(externalRef.current.childNodes.length - 1)];

    // Se inserta el último elemento delante del elemento que se muestra actualmente
    externalRef.current.insertBefore(lastElement, externalRef.current.childNodes[0]);

    // Se realiza el movimiento del slider
    externalRef.current.style.transition = 'none';
    externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;

    setTimeout(() => {
      externalRef.current.style.transition = 'all .3s ease-in-out';
      externalRef.current.style.transform = 'translateX(0%)';
    }, 30);
  };

  // Cada vez que cambie el estado se ejecuta el useEffect para parar el slider o para reanudarlo
  useEffect(() => {
    if (!isEnter) {
      interval = setInterval(() => {
        handleClickNext();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isEnter]);

  return { setIsEnter, handleClickNext, handleClickPrevious };
}

export default useSlider;
