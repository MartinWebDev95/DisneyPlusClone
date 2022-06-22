import React from 'react';
import Header from '../../components/Header';
import VideoBgNationalGeographic from '../../../public/assets/videos/bg-national-geographic.mp4';
import BackgroundVideo from '../../components/BackgroundVideo';

function NationalGeographic() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgNationalGeographic} />
    </>
  );
}

export default NationalGeographic;
