import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgNationalGeographic from '../../../public/assets/videos/bg-national-geographic.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-national-geographic.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import { getMoviesNationalGeographic, getSeriesNationalGeographic } from '../../services/getDataFromAPI';
import Spacing from './styles';

function NationalGeographic() {
  const [moviesGeographic, setMoviesGeographic] = useState([]);
  const [seriesGeographic, setSeriesGeographic] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getMoviesNationalGeographic().then((data) => {
      setMoviesGeographic(data);
    });

    getSeriesNationalGeographic().then((data) => {
      setSeriesGeographic(data);
    });
  }, []);

  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgNationalGeographic} posterImage={PosterImage} />
      <Spacing />
      <Carrousel collection={moviesGeographic} title="En primer plano" type="movie" />
      <Carrousel collection={seriesGeographic} title="Docuseries" type="tv" />
      <Footer />
    </>
  );
}

export default NationalGeographic;
