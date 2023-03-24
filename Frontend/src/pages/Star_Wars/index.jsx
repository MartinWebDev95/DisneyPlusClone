import { useState, useEffect } from 'react';

import VideoBgStarWars from '../../../public/assets/videos/bg-star-wars.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-star-wars.jpg';

import BackgroundVideo from '../../components/BackgroundVideo';
import Carrousel from '../../components/Carrousel';

import { getItemsFromBrand, getItemsCollection } from '../../services/getDataFromAPI';

import Spacing from './styles';

function StarWars() {
  const [starWarsMovies, setStarWarsMovies] = useState([]);
  const [starWarsSeries, setStarWarsSeries] = useState([]);
  const [legoStarWarsMovies, setLegoStarWarsMovies] = useState([]);

  useEffect(() => {
    getItemsFromBrand('movie', '1')
      .then((data) => {
        setStarWarsMovies(data);
      });

    getItemsFromBrand('tv', '1')
      .then((data) => {
        setStarWarsSeries(data);
      });

    getItemsCollection('302331')
      .then((data) => {
        setLegoStarWarsMovies(data);
      });
  }, []);

  return (
    <main>
      <BackgroundVideo
        bgVideo={VideoBgStarWars}
        posterImage={PosterImage}
        altText="Star Wars Logo"
      />

      <Spacing />

      <Carrousel
        collection={starWarsMovies}
        title="Películas Star Wars"
        type="movie"
      />

      <Carrousel
        collection={starWarsSeries}
        title="Series del universo de Star Wars"
        type="tv"
      />

      <Carrousel
        collection={legoStarWarsMovies}
        title="Lego Star Wars"
        type="movie"
      />
    </main>
  );
}

export default StarWars;
