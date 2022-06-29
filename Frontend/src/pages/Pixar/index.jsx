import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgPixar from '../../../public/assets/videos/bg-pixar.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-pixar.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import {
  getMoviesPixar,
  getMostPopularMoviesPixar,
  getMoviesToyStoryPixar,
  getMoviesCarsPixar,
} from '../../services/getDataFromAPI';
import Spacing from './styles';

function Pixar() {
  const [moviesPixar, setMoviesPixar] = useState([]);
  const [popularMoviesPixar, setPopularMoviesPixar] = useState([]);
  const [toyStoryMovies, setToyStoryMovies] = useState([]);
  const [carsMovies, setCarsMovies] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getMoviesPixar().then((data) => {
      setMoviesPixar(data);
    });

    getMostPopularMoviesPixar().then((data) => {
      setPopularMoviesPixar(data);
    });

    getMoviesToyStoryPixar().then((data) => {
      setToyStoryMovies(data);
    });

    getMoviesCarsPixar().then((data) => {
      setCarsMovies(data);
    });
  }, []);

  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgPixar} posterImage={PosterImage} />
      <Spacing />
      <Carrousel collection={moviesPixar} title="En primer plano" type="movie" />
      <Carrousel collection={popularMoviesPixar} title="Películas populares de Pixar" type="movie" />
      <Carrousel collection={toyStoryMovies} title="Toy Story" type="movie" />
      <Carrousel collection={carsMovies} title="Cars" type="movie" />
      <Footer />
    </>
  );
}

export default Pixar;
