import React from 'react';
import Header from '../../components/Header';
import VideoBgMarvel from '../../../public/assets/videos/bg-marvel.mp4';
import BackgroundVideo from '../../components/BackgroundVideo';

function Marvel() {
  return (
    <>
      <Header />
      <BackgroundVideo bgVideo={VideoBgMarvel} />
    </>
  );
}

export default Marvel;
