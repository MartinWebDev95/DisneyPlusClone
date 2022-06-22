import React from 'react';
import Header from '../../components/Header';
import VideoBgStarWars from '../../../public/assets/videos/bg-star-wars.mp4';
import BackgroundVideo from '../../components/BackgroundVideo';

function StarWars() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgStarWars} />
    </>
  );
}

export default StarWars;
