import React from 'react';
import Header from '../../components/Header';
import VideoBgStar from '../../../public/assets/videos/bg-brand-star.mp4';
import BackgroundVideo from '../../components/BackgroundVideo';

function Star() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgStar} />
    </>
  );
}

export default Star;
