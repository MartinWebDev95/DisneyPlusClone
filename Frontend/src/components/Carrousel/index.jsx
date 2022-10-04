/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import useCarrousel from '../../hooks/useCarrousel';
import Card from '../Card';
import {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
} from './styles';

function Carrousel({ collection, title = null, type = '' }) {
  const carrousel = useRef(null);
  const containerCarrousel = useRef(null);

  // // Obtengo la posición final del contenedor que contiene el carrousel
  const containerCarrouselRight = containerCarrousel.current?.getBoundingClientRect().right;

  // // Obtengo la posición inicial del contenedor que contiene el carrousel
  // const containerCarrouselLeft = containerCarrousel.current?.getBoundingClientRect().left;

  const [distanceSlidingDirection, setDistanceSlidingDirection] = useState({
    distance: 0,
    direction: 'right',
  });

  const { total, slidings, cardsInViewport } = useCarrousel(collection, carrousel, distanceSlidingDirection);

  console.log(total, cardsInViewport, distanceSlidingDirection);

  const handleClickNext = () => {
    if (total > containerCarrouselRight) {
      carrousel.current.style.transform = `translateX(-${total}px)`;
      setDistanceSlidingDirection({
        distance: total + cardsInViewport,
        direction: 'right',
      });
    }
  };

  const handleClickPrevious = () => {
    if (total > cardsInViewport) {
      carrousel.current.style.transform = `translateX(-${total}px)`;
      setDistanceSlidingDirection({
        distance: total - cardsInViewport,
        direction: 'left',
      });
    }
  };

  return (
    <section>

      {/* Si el título tiene contenido se muestra */}
      {title && (
        <Container>
          <Title>{title}</Title>
        </Container>
      )}

      <ContainerCarrousel ref={containerCarrousel}>
        {/* El botón sólo se muestra si hay mas de 6 items en el carrousel */}
        {(
          (collection[1]?.length > 0 || collection[2]?.length > 0) || (collection.length > 5)
        ) && (
          <ButtonStyled type="left" onClick={handleClickPrevious}>
            <IoIosArrowBack />
          </ButtonStyled>
        )}

        <CarrouselStyled ref={carrousel}>
          {collection.length === 2 && (
            <>
              {collection[1]?.map((item) => (
                <Card key={item.id} item={item} type={type[0]} />
              ))}
              {collection[0]?.map((item) => (
                <Card key={item.id} item={item} type={type[1]} />
              ))}
            </>
          )}
          {collection.length !== 2 && (
            collection?.map((item) => (
              <Card key={item.id} item={item} type={type} />
            ))
          )}
        </CarrouselStyled>

        {/* El botón sólo se muestra si hay mas de 6 items en el carrousel */}
        {((collection[1]?.length > 0 || collection[2]?.length > 0) || (collection.length > 5)) && (
          <ButtonStyled type="right" onClick={handleClickNext}>
            <IoIosArrowForward />
          </ButtonStyled>
        )}
      </ContainerCarrousel>
    </section>
  );
}

export default Carrousel;
