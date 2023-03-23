import { useState, useEffect } from 'react';

import VideoBgMarvel from '../../../public/assets/videos/bg-marvel.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-marvel.jpg';

import Carrousel from '../../components/Carrousel';
import BackgroundVideo from '../../components/BackgroundVideo';

import { getItemsCollection, getItemsFromBrand } from '../../services/getDataFromAPI';

import Spacing from './styles';

function Marvel() {
  const [moviesMarvel, setMoviesMarvel] = useState([]);
  const [seriesMarvel, setSeriesMarvel] = useState([]);
  const [moviesAvengers, setMoviesAvengers] = useState([]);
  const [moviesSpiderman, setMoviesSpiderman] = useState([]);
  const [moviesCaptainAmerica, setMoviesCaptainAmerica] = useState([]);
  const [moviesThor, setMoviesThor] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getItemsFromBrand('movie', '420')
      .then((data) => {
        setMoviesMarvel(data);
      });

    getItemsFromBrand('tv', '420')
      .then((data) => {
        setSeriesMarvel(data);
      });

    getItemsCollection('86311')
      .then((data) => {
        setMoviesAvengers(data);
      });

    getItemsCollection('531241')
      .then((data) => {
        setMoviesSpiderman(data);
      });

    getItemsCollection('131295')
      .then((data) => {
        setMoviesCaptainAmerica(data);
      });

    getItemsCollection('131296')
      .then((data) => {
        setMoviesThor(data);
      });
  }, []);

  return (
    <main>
      <BackgroundVideo
        bgVideo={VideoBgMarvel}
        posterImage={PosterImage}
        altText="Marvel Logo"
      />

      <Spacing />

      <Carrousel
        collection={moviesMarvel}
        title="Películas Marvel"
        type="movie"
      />

      <Carrousel
        collection={seriesMarvel}
        title="Series Marvel"
        type="tv"
      />

      <Carrousel
        collection={moviesAvengers}
        title="Los Vengadores"
        type="movie"
      />

      <Carrousel
        collection={moviesSpiderman}
        title="Spiderman"
        type="movie"
      />

      <Carrousel
        collection={moviesCaptainAmerica}
        title="El Capitán América"
        type="movie"
      />

      <Carrousel
        collection={moviesThor}
        title="Thor"
        type="movie"
      />
    </main>
  );
}

export default Marvel;
