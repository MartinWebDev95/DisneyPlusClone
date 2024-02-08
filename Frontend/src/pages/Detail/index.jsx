import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import Tabs from '../../components/Tabs';

import useMyList from '../../hooks/useMyList';

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

import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';

function Detail({ type }) {
  const { id } = useParams();

  // Custom hook que muestra los detalles de la película o serie
  const {
    handleSaveMyList, selected, itemDetail, isLoading,
  } = useMyList({ id, type });

  return (
    // Cuando termine de cargar muestro todos los detalles de la película o serie
    isLoading
      ? (
        <Spinner />
      ) : (
        <main>
          <Background
            // ref={background}
            bgImg={`https://image.tmdb.org/t/p/original${itemDetail.backdrop_path}`}
          />

          <Container>
            <Title>{itemDetail.title || itemDetail.name}</Title>

            <p>
              {itemDetail.release_date?.split('-')[0] || itemDetail.first_air_date?.split('-')[0]}

              {' - '}

              {type === 'movie' && (getHoursAndMinutes(itemDetail?.runtime))}

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
      )
  );
}

export default Detail;
