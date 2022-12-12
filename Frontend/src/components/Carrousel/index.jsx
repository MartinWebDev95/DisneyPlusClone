import { useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import useCarrousel from '../../hooks/useCarrousel';
import Card from '../Card';
import {
  CarrouselStyled,
  Title,
  ButtonStyled,
  ContainerCarrousel,
  Container,
  SectionStyled,
} from './styles';

function Carrousel({
  collection = [], title = null, type = '',
}) {
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
  } = useCarrousel(collection, carrousel);

  return (
    <SectionStyled>
      {/* Si el título tiene contenido se muestra */}
      {title && (
        <Container>
          <Title>{title}</Title>
        </Container>
      )}

      <ContainerCarrousel>
        <ButtonStyled
          type="button"
          position="left"
          onClick={handleClickPrevious}
        >
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
            <Card
              key={item.id}
              item={item}
              type={item.type ? item.type : type}
            />
          ))}
        </CarrouselStyled>

        <ButtonStyled
          type="button"
          position="right"
          onClick={handleClickNext}
        >
          <IoIosArrowForward />
        </ButtonStyled>

      </ContainerCarrousel>
    </SectionStyled>
  );
}

export default Carrousel;
