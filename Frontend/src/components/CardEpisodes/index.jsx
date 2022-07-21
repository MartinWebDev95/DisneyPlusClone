/* eslint-disable react/prop-types */
import React from 'react';
import BlankImage from '../../../public/assets/img/no-photo-available-icon.jpg';
import {
  Sinopsis, Title, DivStyled, ImageStyled,
} from './styles';

function CardEpisodes({ item }) {
  return (
    item.still_path !== null
      ? (
        <DivStyled>
          <ImageStyled
            src={`https://image.tmdb.org/t/p/w300${item.still_path}`}
            alt={item.title || item.name}
            available
            loading="lazy"
          />
          <Title>
            {`${item.episode_number}. ${item.name} ${item.runtime !== null ? (`(${item.runtime} min)`) : ('')}`}

          </Title>
          <Sinopsis>{`${item.overview}`}</Sinopsis>
        </DivStyled>
      ) : (
        <DivStyled>
          <ImageStyled
            src={BlankImage}
            alt="No available"
            available={false}
            loading="lazy"
          />
          <Title>{item.name}</Title>
        </DivStyled>
      )
  );
}

export default CardEpisodes;
