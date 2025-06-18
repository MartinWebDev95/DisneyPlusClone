/* eslint-disable react/prop-types */
import { ImageStyled, LinkStyled } from './styles';

function Card({
  item, type, width = '', height = '',
}) {
  return (
    <LinkStyled to={`/${type}/${item.id || item.item_id}`} width={width} draggable={false}>
      {item.poster_path !== null
        ? (
          <ImageStyled
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.title || item.name}
            loading="lazy"
            height={height}
            draggable={false}
          />
        ) : (
          <ImageStyled
            src="/assets/img/no-picture-available.png"
            alt="No available"
            loading="lazy"
            height={height}
            draggable={false}
          />
        )}
    </LinkStyled>
  );
}

export default Card;
