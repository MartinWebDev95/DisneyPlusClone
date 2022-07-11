/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from '../../components/Tabs';
import Spinner from '../../components/Spinner';
import { getDetailMovie, getDetailTv } from '../../services/getDataFromAPI';
import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';
import { useDB } from '../../context/DatabaseContext';
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
  const {
    saveData, removeData, readOneData, oneData,
  } = useDB();
  const [item, setItem] = useState({});
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const { hours, minutesLeft } = getHoursAndMinutes(item?.runtime);

  useEffect(() => {
    window.scrollTo(0, 0);

    type === 'movie'
      ? (
        Promise.all([readOneData(id), getDetailMovie(id)]).then((data) => {
          setSelected(oneData);
          setItem(data[1]);
          setLoading(false);
        })
      ) : (
        Promise.all([readOneData(id), getDetailTv(id)]).then((data) => {
          setSelected(oneData);
          setItem(data[1]);
          setLoading(false);
        })
      );
  }, [id, oneData]);

  const handleChangeButton = () => {
    if (!selected) {
      // Llamo a la función para guardar la película en la BD
      saveData(id, item.poster_path, type);
      setSelected(true);
    } else {
      // Llamo a la función para eliminar la película de la BD
      removeData(id);
      setSelected(false);
    }
  };

  return (
    // Cuando termine de cargar muestro todos los detalles de la película
    loading === false
      ? (
        <>
          <Header />
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
                <RoundedButton type="button" onClick={handleChangeButton} selected={selected} />
              </ContainerButtons>
              <Sinopsis>{item.overview}</Sinopsis>
            </Container>
            <Tabs item={item} id={id} type={type} />
          </main>
          <Footer />
        </>
      ) : (
        <Spinner />
      )
  );
}

export default Detail;
