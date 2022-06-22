/* eslint-disable react/prop-types */
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Card from '../Card';
import {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
} from './styles';

function Carrousel({ collection, title = null, type = '' }) {
  return (
    <section>
      {title && (
        <Container>
          <Title>{title}</Title>
        </Container>
      )}
      <ContainerCarrousel>
        <ButtonStyled type="left">
          <IoIosArrowBack />
        </ButtonStyled>
        <CarrouselStyled>
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
        <ButtonStyled type="right">
          <IoIosArrowForward />
        </ButtonStyled>
      </ContainerCarrousel>
    </section>
  );
}

export default Carrousel;
