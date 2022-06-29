import React, { useState, useEffect } from 'react';
import CardBrand from '../../components/CardBrand';
import Header from '../../components/Header';
import Carrousel from '../../components/Carrousel';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import Container from './styles';
import {
  getNewSeriesDisney, getNewMoviesDisney, getAnimationMovies, getDramaMovies, getComedySeries,
} from '../../services/getDataFromAPI';

function Home() {
  const [newItems, setNewItems] = useState([]);
  const [animationItems, setAnimationItems] = useState([]);
  const [dramaItems, setDramaItems] = useState([]);
  const [comedySeries, setComedySeries] = useState([]);

  useEffect(() => {
    Promise.all([getNewMoviesDisney(), getNewSeriesDisney()]).then(
      (data) => {
        setNewItems(data);
      },
    );

    getAnimationMovies().then((data) => {
      setAnimationItems(data);
    });

    getDramaMovies().then((data) => {
      setDramaItems(data);
    });

    getComedySeries().then((data) => {
      setComedySeries(data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Slider collection={newItems} />
        <Container>
          <CardBrand />
        </Container>
        <Carrousel collection={newItems} title="Nuevo en Disney+" type={['tv', 'movie']} />
        <Carrousel collection={animationItems} title="Películas de Animación" type="movie" />
        <Carrousel collection={dramaItems} title="Películas Dramáticas" type="movie" />
        <Carrousel collection={comedySeries} title="Series de comedia" type="tv" />
      </main>
      <Footer />
    </>
  );
}

export default Home;
