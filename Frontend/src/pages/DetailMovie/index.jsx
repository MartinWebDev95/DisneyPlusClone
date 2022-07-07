import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from '../../components/Tabs';
import Spinner from '../../components/Spinner';
import { getDetailMovie } from '../../services/getDataFromAPI';
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

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const { hours, minutesLeft } = getHoursAndMinutes(movie?.runtime);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetailMovie(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [id]);

  console.log(movie);

  const handleChangeButton = () => {
    setSelected(!selected);
  };

  return (
    loading === false
      ? (
        <>
          <Header />
          <main>
            <Background bgImg={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            <Container>
              <Title>{movie.title}</Title>
              <p>
                {movie.release_date?.split('-')[0]}
                {' - '}
                {hours !== 0
                  ? `${hours}h ${minutesLeft}min`
                  : `${minutesLeft}min`}
              </p>
              <Genres>
                {movie.genres?.map((genre) => genre.name).join(', ')}
              </Genres>
              <ContainerButtons>
                <ButtonPrimary type="button">
                  <img src="/assets/img/play.svg" alt="" />
                  <span>Ver</span>
                </ButtonPrimary>
                <ButtonSecondary type="button">
                  Tráiler
                </ButtonSecondary>
                <RoundedButton type="button" onClick={handleChangeButton} selected={selected} />
              </ContainerButtons>
              <Sinopsis>{movie.overview}</Sinopsis>
            </Container>
            <Tabs item={movie} id={id} type="movie" />
          </main>
          <Footer />
        </>
      ) : (
        <Spinner />
      )

  );
}

export default DetailMovie;
