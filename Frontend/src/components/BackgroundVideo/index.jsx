import { useState } from 'react';
import useOpacity from '../../hooks/useOpacity';
import {
  VideoStyled, ImageStyled, DivOpacity, Wrapper, DivStyled,
} from './styles';

function BackgroundVideo({ bgVideo, posterImage, altText }) {
  const [opacityImage, setOpacityImage] = useState(false);
  const { background } = useOpacity();

  return (
    <DivOpacity ref={background}>
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
