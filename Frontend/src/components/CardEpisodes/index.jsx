/* eslint-disable react/prop-types */
import {
  Sinopsis, Title, DivStyled, ImageStyled,
} from './styles';

function CardEpisodes({ item }) {
  return (
    item.still_path !== null
      ? (
        <DivStyled>
          <div>
            <ImageStyled
              src={`https://image.tmdb.org/t/p/w300${item.still_path}`}
              alt={item.title || item.name}
              loading="lazy"
            />

            <Title>
              {`${item.episode_number}. ${item.name} ${item.runtime !== null
                ? (`(${item.runtime} min)`)
                : ('')}
            `}
            </Title>

            <Sinopsis>
              {`${item.overview !== '' ? `${item.overview.substring(0, 60)}...` : ''}`}
            </Sinopsis>
          </div>
        </DivStyled>
      ) : (
        <DivStyled>
          <ImageStyled
            src="/assets/img/no-photo-available-icon.jpg"
            alt="No available"
            loading="lazy"
          />

          <Title>{item.name}</Title>
        </DivStyled>
      )
  );
}

export default CardEpisodes;
