import { useEffect, useRef, useState } from 'react';

function useSlider({ externalRef = null }) {
  let interval;
  let currentSliding = 0;
  const isTouching = useRef(false);
  const isDown = useRef(false);
  const startPointer = useRef(0);
  const imageSlideWidth = useRef(0);
  const lastElement = useRef(null);
  const firstRender = useRef(true);
  const valueTranslate = 2.63;

  // State que se actualiza cada vez que el mouse entra y sale del slider container
  const [isEnter, setIsEnter] = useState(false);

  const handleClickNext = () => {
    // Se obtiene el primer elemento del slider
    const firstElement = externalRef?.current.childNodes[0];

    // Se traslada el slider
    externalRef.current.style.transition = 'all .3s ease-in-out';
    externalRef.current.style.transform = `translateX(-${valueTranslate * 2}%)`;

    // Cuando la transición termine se ejecuta esta función que mueve el
    // primer elemento del slider al final para así crear un slider infinito
    const finishTransition = () => {
      externalRef.current.style.transition = 'none';
      externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;

      externalRef.current.appendChild(firstElement);

      externalRef.current.removeEventListener('transitionend', finishTransition);
    };

    externalRef.current.addEventListener('transitionend', finishTransition);
  };

  const handleClickPrevious = () => {
    // Se obtiene el último elemento del slider
    lastElement.current = externalRef.current.childNodes[
      (externalRef.current.childNodes.length - 1)
    ];

    // Se inserta el último elemento del slider delante del primer elemento del slider para
    // crear un slider infinito
    externalRef.current.insertBefore(lastElement.current, externalRef.current.childNodes[0]);

    // Se realiza el movimiento del slider
    externalRef.current.style.transition = 'none';
    externalRef.current.style.transform = `translateX(-${valueTranslate * 2}%)`;

    setTimeout(() => {
      externalRef.current.style.transition = 'all .3s ease-in-out';
      externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;
    }, 30);
  };

  const handleMouseDown = (e) => {
    isDown.current = true;

    // Se obtiene la posición inicial del cursor en el carousel
    startPointer.current = e.pageX * 2;

    // Se obtiene el tamaño de la imagen
    imageSlideWidth.current = externalRef.current.children[1].offsetWidth;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    // Se obtiene la posición en todo momento del cursor en el carousel
    const pointer = e.pageX * 2;

    // Se calcula la distancia de desplazamiento del carousel
    currentSliding = (startPointer.current - pointer) + imageSlideWidth.current;

    // Se va actualizando la posición del carousel en el momento
    if (currentSliding <= 0) {
      externalRef.current.style.transform = `translateX(${Math.abs(currentSliding)}px)`;
    } else {
      externalRef.current.style.transform = `translateX(-${currentSliding}px)`;
    }

    externalRef.current.style.transition = 'none';
    externalRef.current.children[1].style.pointerEvents = 'none';
  };

  const handleMouseUp = () => {
    isDown.current = false;

    const halfImageSize = imageSlideWidth.current / 2;
    const slidingMinusImageSize = currentSliding - imageSlideWidth.current;

    if (slidingMinusImageSize >= 0 && (slidingMinusImageSize > halfImageSize)) {
      handleClickNext();
    } else if (slidingMinusImageSize <= 0 && (Math.abs(currentSliding) < halfImageSize)) {
      handleClickPrevious();
    } else {
      externalRef.current.style.transition = 'all .3s ease-in-out';
      externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;
    }

    externalRef.current.children[1].style.pointerEvents = 'auto';
    externalRef.current.children[2].style.pointerEvents = 'auto';
  };

  /* Controles para tablets y móviles */

  const handleTouchStart = (e) => {
    // Comprobación de que el dispositivo es un movil o tablet
    const isMobileDevice = window.navigator.userAgent.toLowerCase().includes('mobi');

    if (!isMobileDevice) return;

    isTouching.current = true;

    setIsEnter(true);

    // Se obtiene la posición inicial del cursor en el carousel
    startPointer.current = e.changedTouches[0].pageX * 2;

    // Se obtiene el tamaño de la imagen
    imageSlideWidth.current = externalRef.current.children[1].offsetWidth;
  };

  const handleTouchMove = (e) => {
    if (!isTouching.current) return;

    // Se obtiene la posicion en todo momento del cursor en el carousel
    const pointer = e.changedTouches[0].pageX * 2;

    // Se calcula la distancia de desplazamiento del carousel
    currentSliding = (startPointer.current - pointer) + imageSlideWidth.current;

    // Se va actualizando la posición del carousel en el momento
    if (currentSliding <= 0) {
      externalRef.current.style.transform = `translateX(${Math.abs(currentSliding)}px)`;
    } else {
      externalRef.current.style.transform = `translateX(-${currentSliding}px)`;
    }

    externalRef.current.style.transition = 'none';
    externalRef.current.children[1].style.pointerEvents = 'none';
  };

  const handleTouchEnd = () => {
    isTouching.current = false;

    const halfImageSize = imageSlideWidth.current / 2;
    const slidingMinusImageSize = currentSliding - imageSlideWidth.current;

    // Si el currentSliding es mayor que la mitad de la imagen se pasa al siguiente, en caso de
    // que no sea mayor se queda en el mismo sitio
    if (slidingMinusImageSize >= 0 && (slidingMinusImageSize > halfImageSize)) {
      handleClickNext();
    } else if (slidingMinusImageSize <= 0 && (Math.abs(currentSliding) < halfImageSize)) {
      handleClickPrevious();
    } else {
      externalRef.current.style.transition = 'all .3s ease-in-out';
      externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;
    }

    externalRef.current.children[1].style.pointerEvents = 'auto';
    externalRef.current.children[2].style.pointerEvents = 'auto';

    // Se actualiza el estado
    setIsEnter(false);
  };

  useEffect(() => {
    // La primera vez que se renderice el componente se traslada el slider
    if (firstRender.current) {
      externalRef.current.style.transition = 'none';
      externalRef.current.style.transform = `translateX(-${valueTranslate}%)`;

      firstRender.current = false;
    }
  }, []);

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
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  };
}

export default useSlider;
