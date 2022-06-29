/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { VideoStyled, ImageStyled } from './styles';

function BackgroundVideo({ bgVideo, posterImage }) {
  const [opacityImage, setOpacityImage] = useState(false);

  // window.addEventListener('scroll', () => {
  //   const divVideoImage = document.querySelector('#container__video-image');

  //   divVideoImage.style.opacity = 1;

  //   while (divVideoImage.style.opacity > 0.2) {
  //     const opa = divVideoImage.style.opacity;
  //   }
  // });

  return (
    <div id="container__video-image">
      <VideoStyled autoPlay playsInline muted onEnded={() => setOpacityImage(true)}>
        <source src={bgVideo} type="video/mp4" />
      </VideoStyled>

      <ImageStyled src={posterImage} alt="Disney" visible={opacityImage} id="image" />
    </div>
  );
}

export default BackgroundVideo;
