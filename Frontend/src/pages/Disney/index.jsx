import React from 'react';
import VideoBgDisney from '../../../public/assets/videos/bg-disney.mp4';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundVideo from '../../components/BackgroundVideo';
import PosterImage from '../../../public/assets/img/categories/bg-disney.jpg';

function Disney() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgDisney} posterImage={PosterImage} />
      <Footer />
    </>
  );
}

export default Disney;
