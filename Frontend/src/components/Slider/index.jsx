/* eslint-disable max-len */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import {
  Container, ContainerImages, LinkStyled, ButtonStyled, Slide,
} from './styles';

function Slider({ collection }) {
  const containerImgs = useRef(null);
  // const intervalCarrousel = useRef(null);
  const valueTranslate = 2.5;

  const handleClickNext = () => {
    const firstElement = containerImgs?.current.childNodes[0];

    containerImgs.current.style.transition = 'all .3s ease-in-out';
    containerImgs.current.style.transform = `translateX(-${valueTranslate}%)`;

    const finishTransition = () => {
      containerImgs.current.style.transition = 'none';
      containerImgs.current.style.transform = 'translateX(0%)';

      containerImgs.current.appendChild(firstElement);

      containerImgs.current.removeEventListener('transitionend', finishTransition);
    };

    containerImgs.current.addEventListener('transitionend', finishTransition);
  };

  const handleClickPrevious = () => {
    const lastElement = containerImgs.current.childNodes[(containerImgs.current.childNodes.length - 1)];

    containerImgs.current.insertBefore(lastElement, containerImgs.current.childNodes[0]);

    containerImgs.current.style.transition = 'none';
    containerImgs.current.style.transform = `translateX(-${valueTranslate}%)`;

    setTimeout(() => {
      containerImgs.current.style.transition = 'all .3s ease-in-out';
      containerImgs.current.style.transform = 'translateX(0%)';
    }, 30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClickNext();
    }, 5000);

    containerImgs.current.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });

    // containerImgs.current.addEventListener('mouseleave', () => {
    //   const newInterval = setInterval(() => {
    //     handleClickNext();
    //   }, 5000);
    // });
  }, []);

  return (
    <Container>
      <ButtonStyled align="left" onClick={handleClickPrevious}>
        <IoIosArrowBack />
      </ButtonStyled>
      <ContainerImages quantity={collection?.length} ref={containerImgs}>
        {collection?.map((item) => (
          <Slide key={item.id}>
            <LinkStyled to={`/${item.type}/${item.id}`} background={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} quantity={collection?.length} />
          </Slide>
        ))}
      </ContainerImages>
      <ButtonStyled align="right" onClick={handleClickNext}>
        <IoIosArrowForward />
      </ButtonStyled>
    </Container>
  );
}

export default Slider;
