import React from 'react';
import Header from '../../components/Header';
import VideoBgPixar from '../../../public/assets/videos/bg-pixar.mp4';
import BackgroundVideo from '../../components/BackgroundVideo';

function Pixar() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgPixar} />
    </>
  );
}

export default Pixar;
