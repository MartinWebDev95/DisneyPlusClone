import Tabs from '../Tabs';
import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';
import {
  Background,
  Container,
  Title,
  Genres,
  Sinopsis,
  ContainerButtons,
  ButtonPrimary,
  ButtonSecondary,
  RoundedButton,
} from './styles';

function DetailInfo({ item, id, type }) {
  const { hours, minutesLeft } = getHoursAndMinutes(item?.runtime);

  return (
    <main>
      <Background bgImg={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />

      <Container>
        <Title>{item.title || item.name}</Title>

        <p>
          {item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0]}

          {' - '}

          {type === 'movie' && (
            hours !== 0
              ? `${hours}h ${minutesLeft}min`
              : `${minutesLeft}min`
          )}

          {type === 'tv' && `${item.number_of_seasons} temporadas`}
        </p>

        <Genres>
          {item.genres?.map((genre) => genre.name).join(', ')}
        </Genres>

        <ContainerButtons>
          <ButtonPrimary type="button">
            <img src="/assets/img/play.svg" alt="" />
            <span>Ver</span>
          </ButtonPrimary>

          <ButtonSecondary type="button">
            Tráiler
          </ButtonSecondary>

          <RoundedButton type="button" />
        </ContainerButtons>

        <Sinopsis>{item.overview}</Sinopsis>

      </Container>

      <Tabs item={item} id={id} type={type} />
    </main>
  );
}

export default DetailInfo;
