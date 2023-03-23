/* eslint-disable no-param-reassign */
import { useEffect } from 'react';

function useCarrousel(collection, carrousel, id, resetPosition) {
  let total = 0;
  let isDown = false;
  let isTouching = false;
  let startPointer;
  let scrollLeft;
  let currentSliding = total;
  let itemsPerScreen = 0;
  let maxSliding = 0;

  // El carrousel vuelve a su posición inicial cuando se cambia
  // de temporada en el caso del carrousel para los episodios de una serie
  // o cuando se cambia de película o serie en la página de detalles
  if (resetPosition) {
    useEffect(() => {
      carrousel.current.style.transform = 'translateX(0%)';
    }, [id]);
  }

  const handleClickNext = () => {
    // Obtengo cuantos items se muestran en cada desplazamiento
    itemsPerScreen = getComputedStyle(document.documentElement).getPropertyValue('--items-per-screen');

    // Calculo cuantos desplazamientos puedo realizar
    maxSliding = ((collection.length / itemsPerScreen) * 100) - 100;

    // Mientras el total de desplazamientos sea menor que el máximo permitido,
    // se desplaza el carousel
    if (total < maxSliding) {
      total += 100;
      carrousel.current.style.transform = `translateX(-${total}%)`;
      carrousel.current.style.transition = 'all .5s ease-in-out';
    }
  };

  const handleClickPrevious = () => {
    // Mientras el total de desplazamientos sea mayor que 0
    // se permite el desplazamiento del carousel en sentido contrario
    if (total > 0) {
      total -= 100;
      carrousel.current.style.transform = `translateX(-${total}%)`;
      carrousel.current.style.transition = 'all .5s ease-in-out';
    }
  };

  const handleMouseDown = (e) => {
    itemsPerScreen = getComputedStyle(document.documentElement).getPropertyValue('--items-per-screen');

    // EL desplazamiento del carousel mediante arrastre
    // solo está disponible si hay menos de 5 items por
    // desplazamiento
    if (Number(itemsPerScreen) === 5) return;

    isDown = true;

    // Se obtiene la posición inicial del cursor en el carousel
    startPointer = (e.pageX - carrousel.current.offsetLeft);
    scrollLeft = carrousel.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    // Se obtiene la posicion en todo momento del cursor en el carousel
    const pointer = e.pageX - carrousel.current.offsetLeft;

    // Se calcula la distancia de desplazamiento del carousel
    // y transformo el desplazamiento del carousel que está en
    // píxeles a porcentaje
    currentSliding = (((scrollLeft - (pointer - startPointer)) * 6.25) / 100);

    // Se va actualizando la posición del carousel en el momento
    carrousel.current.style.transform = `translateX(-${total + (currentSliding)}%)`;
    carrousel.current.style.transition = 'none';
  };

  const handleMouseUp = () => {
    isDown = false;
    itemsPerScreen = getComputedStyle(document.documentElement).getPropertyValue('--items-per-screen');
    maxSliding = ((collection.length / itemsPerScreen) * 100) - 100;

    // Si se ha desplazado mas de un 20% se realiza
    // el desplazamiento completo y se muestran los siguentes items
    // En el caso de que no se haya desplazado mas de 20% el carousel no se desplaza

    if ((total + currentSliding) < 0) {
      total = 0;
    } else if ((currentSliding > 20) && (total < maxSliding)) {
      total += 100;
    } else if ((currentSliding < -20) && (total > 0)) {
      total -= 100;
    } else if (total === 0) {
      total = 0;
    } else {
      total = total;
    }

    // Se realiza el desplazamiento
    carrousel.current.style.transform = `translateX(-${total}%)`;
    carrousel.current.style.transition = 'all .5s ease-in-out';
  };

  /* Controles carrousel para tablets y móviles */

  const handleTouchStart = (e) => {
    // Compruebo que el dispositivo es un movil o tablet
    const isMobileDevice = window.navigator.userAgent.toLowerCase().includes('mobi');

    if (!isMobileDevice) return;

    isTouching = true;

    startPointer = (e.changedTouches[0].pageX - carrousel.current.offsetLeft);
    scrollLeft = carrousel.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;

    const pointer = e.changedTouches[0].pageX - carrousel.current.offsetLeft;

    currentSliding = (((scrollLeft - (pointer - startPointer)) * 6.25) / 100);

    carrousel.current.style.transform = `translateX(-${total + (currentSliding)}%)`;
    carrousel.current.style.transition = 'none';
  };

  const handleTouchEnd = () => {
    isTouching = false;
    itemsPerScreen = getComputedStyle(document.documentElement).getPropertyValue('--items-per-screen');
    maxSliding = ((collection.length / itemsPerScreen) * 100) - 100;

    if ((total + currentSliding) < 0) {
      total = 0;
    } else if ((currentSliding > 20) && (total < maxSliding)) {
      total += 100;
    } else if ((currentSliding < -20) && (total > 0)) {
      total -= 100;
    } else if (total === 0) {
      total = 0;
    } else {
      total = total;
    }

    carrousel.current.style.transform = `translateX(-${total}%)`;
    carrousel.current.style.transition = 'all .5s ease-in-out';
  };

  return {
    handleClickPrevious,
    handleClickNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

export default useCarrousel;
