import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import Tabs from '../../components/Tabs';

import useManipulateMyList from '../../hooks/useManipulateMyList';
import useHoursAndMinutes from '../../hooks/useHoursAndMinutes';
import useOpacity from '../../hooks/useOpacity';

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

function Detail({ type }) {
  const { id } = useParams();

  // Custom hook que controla la opacidad del navbar y del fondo de la página de detalles
  const { background } = useOpacity();

  // Custom hook que muestra los detalles de la película o serie
  const {
    handleSaveMyList, selected, itemDetail, isLoading,
  } = useManipulateMyList({ id, type });

  const { hours, minutesLeft } = useHoursAndMinutes(itemDetail?.runtime);

  return (
    // Cuando termine de cargar muestro todos los detalles de la película
    !isLoading
      ? (
        <main>
          <Background
            ref={background}
            bgImg={`https://image.tmdb.org/t/p/original${itemDetail.backdrop_path}`}
          />

          <Container>
            <Title>{itemDetail.title || itemDetail.name}</Title>

            <p>
              {itemDetail.release_date?.split('-')[0] || itemDetail.first_air_date?.split('-')[0]}

              {' - '}

              {type === 'movie' && (
                hours !== 0
                  ? `${hours}h ${minutesLeft}min`
                  : `${minutesLeft}min`
              )}

              {type === 'tv' && `${itemDetail.number_of_seasons} temporadas`}
            </p>

            <Genres>
              {itemDetail.genres?.map((genre) => genre.name).join(', ')}
            </Genres>

            <ContainerButtons>
              <ButtonPrimary type="button">
                <img src="/assets/img/play.svg" alt="" />
                <span>Ver</span>
              </ButtonPrimary>

              <ButtonSecondary type="button">
                Tráiler
              </ButtonSecondary>

              <RoundedButton
                type="button"
                onClick={handleSaveMyList}
                aria-selected={selected}
              />
            </ContainerButtons>

            <Sinopsis>{itemDetail.overview}</Sinopsis>

          </Container>

          <Tabs item={itemDetail} id={id} type={type} />
        </main>
      ) : (
        <Spinner />
      )
  );
}

export default Detail;
