import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from '../../components/Tabs';
import { getDetailTv } from '../../services/getDataFromAPI';
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

function DetailTv() {
  const { id } = useParams();
  const [tv, setTv] = useState({});
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetailTv(id).then((data) => {
      setTv(data);
    });
  }, [id]);

  console.log(tv);

  const handleChangeButton = () => {
    setSelected(!selected);
  };

  return (
    <>
      <Header />
      <main>
        <Background bgImg={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`} />
        <Container>
          <Title>{tv.name}</Title>
          <p>
            {tv.first_air_date?.split('-')[0]}
            {' - '}
            {`${tv.number_of_seasons} temporadas`}
          </p>
          <Genres>
            {tv.genres?.map((genre) => genre.name).join(', ')}
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
          <Sinopsis>{tv.overview}</Sinopsis>
        </Container>
        <Tabs item={tv} id={id} type="tv" />
      </main>
      <Footer />
    </>
  );
}

export default DetailTv;
