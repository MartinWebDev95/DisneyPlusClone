import React from 'react';
import Header from '../../components/Header';
import VideoBgDisney from '../../../public/assets/videos/bg-disney.mp4';
import BackgroundVideo from '../../components/BackgroundVideo';

function Disney() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgDisney} />
    </>
  );
}

export default Disney;
