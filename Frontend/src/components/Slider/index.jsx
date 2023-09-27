import { useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import useSlider from '../../hooks/useSlider';
import {
  Container, Wrapper, ContainerImages, LinkStyled, ButtonStyled, Slide,
} from './styles';

function Slider({ collection }) {
  const containerImgs = useRef(null);

  const {
    setIsEnter,
    handleClickNext,
    handleClickPrevious,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useSlider({
    externalRef: containerImgs,
  });

  return (
    <Container
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
    >
      <Wrapper>
        <ButtonStyled align="left" onClick={handleClickPrevious}>
          <IoIosArrowBack />
        </ButtonStyled>

        <ContainerImages
          quantity={collection?.length}
          ref={containerImgs}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {collection?.map((item) => (
            <Slide key={item.id}>
              <LinkStyled
                to={`/${item.first_air_date ? 'tv' : 'movie'}/${item.id}`}
                background={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                quantity={collection?.length}
              />
            </Slide>
          ))}
        </ContainerImages>

        <ButtonStyled align="right" onClick={handleClickNext}>
          <IoIosArrowForward />
        </ButtonStyled>
      </Wrapper>
    </Container>
  );
}

export default Slider;
