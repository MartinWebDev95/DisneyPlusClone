import { useEffect, useState } from 'react';

import VideoBgStar from '../../../public/assets/videos/bg-brand-star.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-brand-star.jpg';

import BackgroundVideo from '../../components/BackgroundVideo';
import { getItemsFromStar, getItemsFromStarGenre, getItemsFromStarNew } from '../../services/getDataFromAPI';
import Spacing from '../Pixar/styles';
import Carrousel from '../../components/Carrousel';

function Star() {
  const [itemsStar, setItemsStar] = useState([]);
  const [newItemsStar, setNewItemsStar] = useState([]);
  const [seriesStarCrimes, setSeriesStarCrimes] = useState([]);
  const [moviesStarAction, setMoviesStarAction] = useState([]);
  const [seriesStarDrama, setSeriesStarDrama] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    Promise.all([getItemsFromStar('tv'), getItemsFromStar('movie')]).then((data) => {
      const newSeries = data[0].map((item) => ({ ...item, type: 'tv' }));
      const newMovies = data[1].map((item) => ({ ...item, type: 'movie' }));
      setItemsStar(newSeries.concat(newMovies));
    });

    Promise.all([getItemsFromStarNew('tv'), getItemsFromStarNew('movie')]).then((data) => {
      const newSeries = data[0].map((item) => ({ ...item, type: 'tv' }));
      const newMovies = data[1].map((item) => ({ ...item, type: 'movie' }));
      setNewItemsStar(newSeries.concat(newMovies));
    });

    getItemsFromStarGenre('tv', '80').then((data) => {
      setSeriesStarCrimes(data);
    });

    getItemsFromStarGenre('movie', '28').then((data) => {
      setMoviesStarAction(data);
    });

    getItemsFromStarGenre('tv', '18').then((data) => {
      setSeriesStarDrama(data);
    });
  }, []);

  return (
    <>
      <BackgroundVideo
        bgVideo={VideoBgStar}
        posterImage={PosterImage}
        altText="Star Logo"
      />

      <Spacing />

      <Carrousel
        collection={itemsStar}
        title="En primer plano"
      />

      <Carrousel
        collection={newItemsStar}
        title="Añadidas recientemente"
      />

      <Carrousel
        collection={seriesStarCrimes}
        title="Crímenes reales"
        type="tv"
      />

      <Carrousel
        collection={moviesStarAction}
        title="Películas de acción"
        type="movie"
      />

      <Carrousel
        collection={seriesStarDrama}
        title="Series dramáticas"
        type="tv"
      />
    </>
  );
}

export default Star;
