/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CardStyled from './styles';

function Card({ item, type }) {
  return (
    <Link
      to={
        type === 'movie'
          ? `/movie/${item.id}`
          : `/tv/${item.id}`
      }
    >
      <CardStyled>
        {item.poster_path !== null && (
          <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.title}
          />
        )}
      </CardStyled>
    </Link>
  );
}

export default Card;
