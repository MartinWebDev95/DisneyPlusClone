import { useState } from 'react';
import {
  VideoStyled, ImageStyled, DivOpacity, Wrapper, DivStyled,
} from './styles';

function BackgroundVideo({ bgVideo, posterImage, altText }) {
  const [opacityImage, setOpacityImage] = useState(false);

  return (
    <DivOpacity>
      <VideoStyled autoPlay playsInline muted onEnded={() => setOpacityImage(true)}>
        <source src={bgVideo} type="video/mp4" />
      </VideoStyled>
      <Wrapper>
        <ImageStyled src={posterImage} alt={altText} visible={opacityImage} />

        <DivStyled />
      </Wrapper>
    </DivOpacity>
  );
}

export default BackgroundVideo;
