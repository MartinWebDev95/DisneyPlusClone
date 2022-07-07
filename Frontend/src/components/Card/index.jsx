/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ImageStyled from './styles';
import BlankImage from '../../../public/assets/img/no-picture-available.png';

function Card({ item, type }) {
  return (
    <Link
      to={
        type === 'movie'
          ? `/movie/${item.id}`
          : `/tv/${item.id}`
      }
    >
      {item.poster_path !== null
        ? (
          <ImageStyled
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.title || item.name}
            available
            loading="lazy"
          />
        ) : (
          <ImageStyled
            src={BlankImage}
            alt="No available"
            available={false}
            loading="lazy"
          />
        )}
    </Link>
  );
}

export default Card;
