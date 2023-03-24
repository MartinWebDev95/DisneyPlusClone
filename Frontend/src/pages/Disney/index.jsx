import { useState, useEffect } from 'react';

import VideoBgDisney from '../../../public/assets/videos/bg-disney.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-disney.jpg';

import Carrousel from '../../components/Carrousel';
import BackgroundVideo from '../../components/BackgroundVideo';

import {
  getMoviesWaltDisneyAnimations,
  getMoviesWaltDisney90s,
  getMoviesWaltDisneyActionAdventure,
  getItemsCollection,
} from '../../services/getDataFromAPI';

import Spacing from './styles';

function Disney() {
  const [moviesWaltDisney, setMoviesWaltDisney] = useState([]);
  const [moviesWaltDisney90s, setMoviesWaltDisney90s] = useState([]);
  const [moviesWaltDisneyActionAdventure, setMoviesWaltDisneyActionAdventure] = useState([]);
  const [moviesIceAge, setMoviesIceAge] = useState([]);

  useEffect(() => {
    getMoviesWaltDisneyAnimations().then((data) => {
      setMoviesWaltDisney(data);
    });

    getMoviesWaltDisney90s().then((data) => {
      setMoviesWaltDisney90s(data);
    });

    getMoviesWaltDisneyActionAdventure().then((data) => {
      setMoviesWaltDisneyActionAdventure(data);
    });

    getItemsCollection('8354').then((data) => {
      setMoviesIceAge(data);
    });
  }, []);

  return (
    <main>
      <BackgroundVideo
        bgVideo={VideoBgDisney}
        posterImage={PosterImage}
        altText="Disney Logo"
      />

      <Spacing />

      <Carrousel
        collection={moviesWaltDisney}
        title="Walt Disney Animations Studios"
        type="movie"
      />

      <Carrousel
        collection={moviesWaltDisney90s}
        title="Hecho en los 90"
        type="movie"
      />

      <Carrousel
        collection={moviesIceAge}
        title="Ice Age: La edad del hielo"
        type="movie"
      />

      <Carrousel
        collection={moviesWaltDisneyActionAdventure}
        title="Acción y Aventura"
        type="movie"
      />
    </main>
  );
}

export default Disney;
