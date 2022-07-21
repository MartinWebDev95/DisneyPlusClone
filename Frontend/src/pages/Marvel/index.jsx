import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgMarvel from '../../../public/assets/videos/bg-marvel.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-marvel.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import { getItemsFromBrand, getItemsCollection } from '../../services/getDataFromAPI';
import Spacing from './styles';
import { useAuth } from '../../context/AuthContext';

function Marvel() {
  const [moviesMarvel, setMoviesMarvel] = useState([]);
  const [seriesMarvel, setSeriesMarvel] = useState([]);
  const [moviesAvengersMarvel, setMoviesAvengersMarvel] = useState([]);
  const [moviesSpidermanMarvel, setMoviesSpidermanMarvel] = useState([]);
  const [moviesThorMarvel, setMoviesThorMarvel] = useState([]);
  const [moviesCaptainAmericaMarvel, setMoviesCaptainAmericaMarvel] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/');
      return;
    }

    window.scrollTo(0, 0);

    getItemsFromBrand('movie', '420').then((data) => {
      setMoviesMarvel(data);
    });

    getItemsFromBrand('tv', '420').then((data) => {
      setSeriesMarvel(data);
    });

    getItemsCollection('86311').then((data) => {
      setMoviesAvengersMarvel(data);
    });

    getItemsCollection('131295').then((data) => {
      setMoviesCaptainAmericaMarvel(data);
    });

    getItemsCollection('531241').then((data) => {
      setMoviesSpidermanMarvel(data);
    });

    getItemsCollection('131296').then((data) => {
      setMoviesThorMarvel(data);
    });
  }, []);

  return (
    <>
      <Header position="fixed" />
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
