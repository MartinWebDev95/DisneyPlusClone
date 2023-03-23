/* eslint-disable react/prop-types */
import { ImageStyled, LinkStyled } from './styles';
import BlankImage from '/assets/img/no-picture-available.png';

function Card({
  item, type, width = '', height = '',
}) {
  return (
    <LinkStyled to={`/${type}/${item.id || item.idItem}`} width={width}>
      {item.poster_path !== null
        ? (
          <ImageStyled
            src={`https://image.tmdb.org/t/p/w200${item.poster_path || item.posterPath}`}
            alt={item.title || item.name}
            available
            loading="lazy"
            height={height}
          />
        ) : (
          <ImageStyled
            src={BlankImage}
            alt="No available"
            available={false}
            loading="lazy"
            height={height}
          />
        )}
    </LinkStyled>
  );
}

export default Card;
