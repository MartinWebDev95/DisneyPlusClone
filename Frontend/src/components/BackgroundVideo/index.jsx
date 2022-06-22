/* eslint-disable react/prop-types */
import React from 'react';
import BgVideoStyled from './styles';

function BrackgroundVideo({ bgVideo, posterImage }) {
  return (
    <BgVideoStyled>
      <video autoPlay playsInline muted poster={posterImage}>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </BgVideoStyled>
  );
}

export default BrackgroundVideo;
