import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgMarvel from '../../../public/assets/videos/bg-marvel.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-marvel.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import {
  getMoviesMarvel,
  getSeriesMarvel,
  getMoviesAvengersMarvel,
  getMoviesCaptainAmericaMarvel,
  getMoviesSpidermanMarvel,
  getMoviesThorMarvel,
} from '../../services/getDataFromAPI';
import Spacing from './styles';

function Marvel() {
  const [moviesMarvel, setMoviesMarvel] = useState([]);
  const [seriesMarvel, setSeriesMarvel] = useState([]);
  const [moviesAvengersMarvel, setMoviesAvengersMarvel] = useState([]);
  const [moviesSpidermanMarvel, setMoviesSpidermanMarvel] = useState([]);
  const [moviesThorMarvel, setMoviesThorMarvel] = useState([]);
  const [moviesCaptainAmericaMarvel, setMoviesCaptainAmericaMarvel] = useState([]);

  useEffect(() => {
    document.title = 'Marvel';

    window.scrollTo(0, 0);

    getMoviesMarvel().then((data) => {
      setMoviesMarvel(data);
    });

    getSeriesMarvel().then((data) => {
      setSeriesMarvel(data);
    });

    getMoviesAvengersMarvel().then((data) => {
      setMoviesAvengersMarvel(data);
    });

    getMoviesCaptainAmericaMarvel().then((data) => {
      setMoviesCaptainAmericaMarvel(data);
    });

    getMoviesSpidermanMarvel().then((data) => {
      setMoviesSpidermanMarvel(data);
    });

    getMoviesThorMarvel().then((data) => {
      setMoviesThorMarvel(data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <BackgroundVideo bgVideo={VideoBgMarvel} posterImage={PosterImage} />
        <Spacing />
        <Carrousel collection={moviesMarvel} title="Películas Marvel" type="movie" />
        <Carrousel collection={seriesMarvel} title="Series Marvel" type="tv" />
        <Carrousel collection={moviesAvengersMarvel} title="Los Vengadores" type="movie" />
        <Carrousel collection={moviesCaptainAmericaMarvel} title="El Capitán América" type="movie" />
        <Carrousel collection={moviesSpidermanMarvel} title="Spiderman" type="movie" />
        <Carrousel collection={moviesThorMarvel} title="Thor" type="movie" />
      </main>
      <Footer />
    </>
  );
}

export default Marvel;
