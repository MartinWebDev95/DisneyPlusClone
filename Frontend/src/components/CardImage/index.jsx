// import { Link } from 'react-router-dom';
import { ImageStyled, LinkStyled } from './styles';
import BlankImage from '/assets/img/no-picture-available.png';

function CardImage({
  type, item, width, height,
}) {
  return (
    <LinkStyled to={`/${type}/${item.id}`} width={width}>
      {item.poster_path !== null
        ? (
          <ImageStyled
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
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

export default CardImage;
