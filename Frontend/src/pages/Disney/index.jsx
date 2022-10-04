import React, { useState, useEffect } from 'react';
import VideoBgDisney from '../../../public/assets/videos/bg-disney.mp4';
import Header from '../../components/Header';
import Carrousel from '../../components/Carrousel';
import Footer from '../../components/Footer';
import BackgroundVideo from '../../components/BackgroundVideo';
import PosterImage from '../../../public/assets/img/categories/bg-disney.jpg';
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
    window.scrollTo(0, 0);

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
    <>
      <Header position="fixed" />
      <main>
        <BackgroundVideo bgVideo={VideoBgDisney} posterImage={PosterImage} />
        <Spacing />
        <Carrousel collection={moviesWaltDisney} title="Walt Disney Animations Studios" type="movie" />
        <Carrousel collection={moviesWaltDisney90s} title="Hecho en los 90" type="movie" />
        <Carrousel collection={moviesIceAge} title="Ice Age: La edad del hielo" type="movie" />
        <Carrousel collection={moviesWaltDisneyActionAdventure} title="Acción y Aventura" type="movie" />
      </main>
      <Footer />
    </>
  );
}

export default Disney;
