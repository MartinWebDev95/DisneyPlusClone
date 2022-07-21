import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgStarWars from '../../../public/assets/videos/bg-star-wars.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-star-wars.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import { getItemsFromBrand, getItemsCollection } from '../../services/getDataFromAPI';
import Spacing from './styles';
import { useAuth } from '../../context/AuthContext';

function StarWars() {
  const [starWarsMovies, setStarWarsMovies] = useState([]);
  const [starWarsSeries, setStarWarsSeries] = useState([]);
  const [legoStarWarsMovies, setLegoStarWarsMovies] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/');
      return;
    }

    window.scrollTo(0, 0);

    getItemsFromBrand('movie', '1').then((data) => {
      setStarWarsMovies(data);
    });

    getItemsFromBrand('tv', '1').then((data) => {
      setStarWarsSeries(data);
    });

    getItemsCollection('302331').then((data) => {
      setLegoStarWarsMovies(data);
    });
  }, []);

  return (
    <>
      <Header position="fixed" />
      <BackgroundVideo bgVideo={VideoBgStarWars} posterImage={PosterImage} />
      <Spacing />
      <Carrousel collection={starWarsMovies} title="Películas Star Wars" type="movie" />
      <Carrousel collection={starWarsSeries} title="Series del universo de Star Wars" type="tv" />
      <Carrousel collection={legoStarWarsMovies} title="Lego Star Wars" type="movie" />
      <Footer />
    </>
  );
}

export default StarWars;
