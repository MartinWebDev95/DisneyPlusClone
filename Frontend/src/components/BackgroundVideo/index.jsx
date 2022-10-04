/* eslint-disable react/prop-types */
import { useState } from 'react';
import { VideoStyled, ImageStyled, DivOpacity } from './styles';

function BackgroundVideo({ bgVideo, posterImage }) {
  const [opacityImage, setOpacityImage] = useState(false);

  return (
    <div id="container__video-image">
      <DivOpacity />
      <VideoStyled autoPlay playsInline muted onEnded={() => setOpacityImage(true)}>
        <source src={bgVideo} type="video/mp4" />
      </VideoStyled>

      <ImageStyled src={posterImage} alt="Disney" visible={opacityImage} id="image" />
    </div>
  );
}

export default BackgroundVideo;
