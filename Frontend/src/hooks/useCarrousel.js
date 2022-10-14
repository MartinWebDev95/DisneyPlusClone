/* eslint-disable no-param-reassign */
function useCarrousel(collection, carrousel, total, maxSliding, type = '') {
  let isDown = false;
  let isTouching = false;
  let startPointer;
  let scrollLeft;
  let totalSliding = 0;
  let currentSliding = total;

  const handleClickNext = () => {
    const itemsPerScreen = getComputedStyle(document.documentElement).getPropertyValue('--items-per-screen');

    if (type === 'episodes') {
      maxSliding = ((collection.length / itemsPerScreen) * 100) - 100;
    } else {
      maxSliding = ((collection.length / itemsPerScreen) * 100) - 100;
    }

    if (total < maxSliding) {
      total += 100;
      carrousel.current.style.transform = `translateX(-${total}%)`;
      carrousel.current.style.transition = 'all .5s ease-in-out';
    }
  };

  const handleClickPrevious = () => {
    if (total > 0) {
      total -= 100;
      carrousel.current.style.transform = `translateX(-${total}%)`;
      carrousel.current.style.transition = 'all .5s ease-in-out';
    }
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startPointer = (e.pageX - carrousel.current.offsetLeft);
    scrollLeft = carrousel.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;

    if ((totalSliding + (currentSliding * 5)) < 0) {
      totalSliding = 0;
    } else {
      totalSliding += (currentSliding * 5);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const pointer = e.pageX - carrousel.current.offsetLeft;

    currentSliding = (((scrollLeft - (pointer - startPointer)) * 6.25) / 100);

    carrousel.current.style.transform = `translateX(-${totalSliding + (currentSliding * 5)}%)`;
    carrousel.current.style.transition = 'none';
  };

  const handleMouseUp = () => {
    isDown = false;

    if ((totalSliding + (currentSliding * 5)) < 0) {
      totalSliding = 0;
    } else {
      totalSliding += (currentSliding * 5);
    }
  };

  /* Controles carrousel para tablets y moviles */

  const handleTouchStart = (e) => {
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

    carrousel.current.style.transform = `translateX(-${totalSliding + (currentSliding * 5)}%)`;
    carrousel.current.style.transition = 'none';
  };

  const handleTouchEnd = () => {
    isTouching = false;

    if ((totalSliding + (currentSliding * 5)) < 0) {
      totalSliding = 0;
    } else {
      totalSliding += (currentSliding * 5);
    }
  };

  return {
    handleClickPrevious,
    handleClickNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

export default useCarrousel;
