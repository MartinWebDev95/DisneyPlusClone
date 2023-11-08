import { useEffect, useRef, useState } from 'react';

function useSlider({ externalRef = null }) {
  let interval;
  const imageSlideWidth = useRef(0);
  const lastElement = useRef(null);

  // State que se actualiza cada vez que el mouse entra y sale del slider container
  const [isEnter, setIsEnter] = useState(false);

  const handleClickNext = () => {
    // Se obtiene el tamaño de la imagen
    imageSlideWidth.current = externalRef.current?.children[1]?.offsetWidth;

    // Se obtiene el primer elemento del slider
    const firstElement = externalRef?.current.childNodes[0];

    // Se traslada el slider
    externalRef.current.style.transition = 'all .3s ease-in-out';
    externalRef.current.style.transform = `translateX(-${imageSlideWidth.current}px)`;

    // Cuando la transición termine se ejecuta esta función que mueve el
    // primer elemento del slider al final para así crear un slider infinito
    const finishTransition = () => {
      externalRef.current.style.transition = 'none';
      externalRef.current.style.transform = 'translateX(0px)';

      externalRef.current.appendChild(firstElement);

      externalRef.current.removeEventListener('transitionend', finishTransition);
    };

    externalRef.current.addEventListener('transitionend', finishTransition);
  };

  const handleClickPrevious = () => {
    // Se obtiene el tamaño de la imagen
    imageSlideWidth.current = externalRef.current.children[1].offsetWidth;

    // Se obtiene el último elemento del slider
    lastElement.current = externalRef.current.childNodes[
      (externalRef.current.childNodes.length - 1)
    ];

    // Se inserta el último elemento del slider delante del primer elemento del slider para
    // crear un slider infinito
    externalRef.current.insertBefore(lastElement.current, externalRef.current.childNodes[0]);

    // Se realiza el movimiento del slider
    externalRef.current.style.transition = 'none';
    externalRef.current.style.transform = `translateX(-${imageSlideWidth.current}px)`;

    setTimeout(() => {
      externalRef.current.style.transition = 'all .3s ease-in-out';
      externalRef.current.style.transform = 'translateX(0px)';
    }, 30);
  };

  // Cada vez que cambie el estado se ejecuta el useEffect para parar el slider automático
  // o para reanudarlo
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

  return {
    setIsEnter,
    handleClickNext,
    handleClickPrevious,
  };
}

export default useSlider;
