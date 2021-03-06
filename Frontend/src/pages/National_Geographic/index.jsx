import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgNationalGeographic from '../../../public/assets/videos/bg-national-geographic.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-national-geographic.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import { getItemsFromBrand } from '../../services/getDataFromAPI';
import Spacing from './styles';
import { useAuth } from '../../context/AuthContext';

function NationalGeographic() {
  const [moviesGeographic, setMoviesGeographic] = useState([]);
  const [seriesGeographic, setSeriesGeographic] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/');
      return;
    }

    window.scrollTo(0, 0);

    getItemsFromBrand('movie', '7521').then((data) => {
      setMoviesGeographic(data);
    });

    getItemsFromBrand('tv', '7521').then((data) => {
      setSeriesGeographic(data);
    });
  }, []);

  return (
    <>
      <Header position="fixed" />
      <BackgroundVideo bgVideo={VideoBgNationalGeographic} posterImage={PosterImage} />
      <Spacing />
      <Carrousel collection={moviesGeographic} title="En primer plano" type="movie" />
      <Carrousel collection={seriesGeographic} title="Docuseries" type="tv" />
      <Footer />
    </>
  );
}

export default NationalGeographic;
