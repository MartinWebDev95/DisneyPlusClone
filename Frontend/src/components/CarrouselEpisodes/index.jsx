/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardEpisodes from '../CardEpisodes';
import { ContainerCarrousel, ButtonStyled, CarrouselStyled } from './styles';

function CarrouselEpisodes({ collection }) {
  const carrousel = useRef(null);
  let total = 0;

  const handleClickNext = () => {
    // Obtengo el ancho que mide el carrousel
    const carrouselWidth = carrousel.current?.offsetWidth;

    // Calculo la cantidad de items que tiene el carrousel
    const quantityItems = collection?.length;

    // Divido el ancho completo del carrousel entre la cantidad de items y luego lo multiplico por la cantidad de items que quiero que se vean en cada desplazamiento
    const widthCarrousel = (carrousel.current?.offsetWidth / quantityItems) * 5;

    if (total <= (carrouselWidth - (widthCarrousel * 2))) total += widthCarrousel;

    // Aplico el translate al carrousel
    carrousel.current.style.transform = `translateX(-${total}px)`;
  };

  const handleClickPrevious = () => {
    // Calculo la cantidad de items que tiene el carrousel
    const quantityItems = collection?.length;

    // Divido el ancho completo del carrousel entre la cantidad de items y luego lo multiplico por la cantidad de items que quiero que se vean en cada desplazamiento
    const widthCarrousel = (carrousel.current?.offsetWidth / quantityItems) * 5;

    // Si el carrousel se encuentra al principio se deshabilita el desplazamiento del botón izquierdo
    if (total > 0) total -= widthCarrousel;

    // Aplico el translate al carrousel
    carrousel.current.style.transform = `translateX(-${total}px)`;
  };

  return (
    <ContainerCarrousel>
      <ButtonStyled type="left" onClick={handleClickPrevious}>
        <IoIosArrowBack />
      </ButtonStyled>

      <CarrouselStyled ref={carrousel}>
        {collection?.map((item) => (
          <CardEpisodes key={item.id} item={item} />
        ))}
      </CarrouselStyled>

      <ButtonStyled type="right" onClick={handleClickNext}>
        <IoIosArrowForward />
      </ButtonStyled>
    </ContainerCarrousel>
  );
}

export default CarrouselEpisodes;
