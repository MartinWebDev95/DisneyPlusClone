/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Card from '../Card';
import {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
} from './styles';

function Carrousel({ collection, title = null, type = '' }) {
  const carrousel = useRef(null);
  let total = 0;

  const handleClickNext = () => {
    // Obtengo el ancho que mide el carrousel
    const carrouselWidth = carrousel.current?.offsetWidth;

    // Calculo la cantidad de items que tiene el carrousel
    const quantityItems = (collection[0]?.length + collection[1]?.length) || collection?.length;

    // Divido el ancho completo del carrousel entre la cantidad de items y luego lo multiplico por la cantidad de items que quiero que se vean en cada desplazamiento
    const widthCarrousel = (carrousel.current?.offsetWidth / quantityItems) * 5;

    if (total <= (carrouselWidth - (widthCarrousel * 2))) total += widthCarrousel;

    // Aplico el translate al carrousel
    carrousel.current.style.transform = `translateX(-${total}px)`;
  };

  const handleClickPrevious = () => {
    // Calculo la cantidad de items que tiene el carrousel
    const quantityItems = (collection[0]?.length + collection[1]?.length) || collection?.length;

    // Divido el ancho completo del carrousel entre la cantidad de items y luego lo multiplico por la cantidad de items que quiero que se vean en cada desplazamiento
    const widthCarrousel = (carrousel.current?.offsetWidth / quantityItems) * 5;

    // Si el carrousel se encuentra al principio se deshabilita el desplazamiento del botón izquierdo
    if (total > 0) total -= widthCarrousel;

    // Aplico el translate al carrousel
    carrousel.current.style.transform = `translateX(-${total}px)`;
  };

  return (
    <section>

      {/* Si el título tiene contenido se muestra */}
      {title && (
        <Container>
          <Title>{title}</Title>
        </Container>
      )}

      <ContainerCarrousel>
        {/* El botón sólo se muestra si hay mas de 6 items en el carrousel */}
        {((collection[1]?.length > 0 || collection[2]?.length > 0) || (collection.length > 6)) && (
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
        {((collection[1]?.length > 0 || collection[2]?.length > 0) || (collection.length > 6)) && (
          <ButtonStyled type="right" onClick={handleClickNext}>
            <IoIosArrowForward />
          </ButtonStyled>
        )}
      </ContainerCarrousel>
    </section>
  );
}

export default Carrousel;
