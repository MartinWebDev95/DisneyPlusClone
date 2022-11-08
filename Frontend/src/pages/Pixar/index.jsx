import { useState, useEffect } from 'react';

import VideoBgPixar from '../../../public/assets/videos/bg-pixar.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-pixar.jpg';

import {
  getItemsFromBrand,
  getMostPopularMoviesPixar,
  getItemsCollection,
} from '../../services/getDataFromAPI';

import Carrousel from '../../components/Carrousel';
import BackgroundVideo from '../../components/BackgroundVideo';

import Spacing from './styles';

function Pixar() {
  const [moviesPixar, setMoviesPixar] = useState([]);
  const [popularMoviesPixar, setPopularMoviesPixar] = useState([]);
  const [toyStoryMovies, setToyStoryMovies] = useState([]);
  const [carsMovies, setCarsMovies] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getItemsFromBrand('movie', '3').then((data) => {
      setMoviesPixar(data);
    });

    getMostPopularMoviesPixar().then((data) => {
      setPopularMoviesPixar(data);
    });

    getItemsCollection('10194').then((data) => {
      setToyStoryMovies(data);
    });

    getItemsCollection('87118').then((data) => {
      setCarsMovies(data);
    });
  }, []);

  return (
    <main>
      <BackgroundVideo bgVideo={VideoBgPixar} posterImage={PosterImage} />

      <Spacing />

      <Carrousel
        collection={moviesPixar}
        title="En primer plano"
        type="movie"
      />

      <Carrousel
        collection={popularMoviesPixar}
        title="Películas populares de Pixar"
        type="movie"
      />

      <Carrousel
        collection={toyStoryMovies}
        title="Toy Story"
        type="movie"
      />

      <Carrousel
        collection={carsMovies}
        title="Cars"
        type="movie"
      />
    </main>
  );
}

export default Pixar;
