import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardEpisodes from '../CardEpisodes';
import useCarrousel from '../../hooks/useCarrousel';
import { ContainerCarrousel, ButtonStyled, CarrouselStyled } from './styles';

function CarrouselEpisodes({ collection = [], id, resetPosition }) {
  const carrousel = useRef(null);

  const {
    handleClickPrevious,
    handleClickNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarrousel(collection, carrousel, id, resetPosition);

  return (
    <ContainerCarrousel>
      <ButtonStyled position="left" onClick={handleClickPrevious}>
        <IoIosArrowBack />
      </ButtonStyled>

      <CarrouselStyled
        ref={carrousel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {collection?.map((item) => (
          <CardEpisodes key={item.id} item={item} />
        ))}
      </CarrouselStyled>

      <ButtonStyled position="right" onClick={handleClickNext}>
        <IoIosArrowForward />
      </ButtonStyled>
    </ContainerCarrousel>
  );
}

export default CarrouselEpisodes;
