import { useRef, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import useCarrousel from '../../hooks/useCarrousel';
import Card from '../Card';
import {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container, SectionStyled,
} from './styles';

function Carrousel({
  collection = [], title = null, type = '', isLoading,
}) {
  const carrousel = useRef(null);
  const maxSliding = 0;
  const total = 0;

  const {
    handleClickPrevious,
    handleClickNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarrousel(collection, carrousel, total, maxSliding);

  return (
    <SectionStyled>
      {/* Si el título tiene contenido se muestra */}
      {title && (
        <Container>
          <Title>{title}</Title>
        </Container>
      )}

      <ContainerCarrousel>
        {/* El botón sólo se muestra si hay mas de 6 items en el carrousel */}
        <ButtonStyled
          type="left"
          aria-hidden={total === 0}
          show={collection.length > 5}
          onClick={handleClickPrevious}
        >
          <IoIosArrowBack />
        </ButtonStyled>

        <CarrouselStyled
          ref={carrousel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {collection?.map((item) => (
            <Card
              key={item.id}
              item={item}
              type={item.type ? item.type : type}
              isLoading={isLoading}
            />
          ))}
        </CarrouselStyled>

        <ButtonStyled
          type="right"
          aria-hidden={total === maxSliding}
          show={collection.length > 5}
          onClick={handleClickNext}
        >
          <IoIosArrowForward />
        </ButtonStyled>

      </ContainerCarrousel>
    </SectionStyled>
  );
}

export default Carrousel;
