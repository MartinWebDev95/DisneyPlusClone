import styled from 'styled-components';

const VideoStyled = styled.video`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`;

const ImageStyled = styled.img`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  ${(props) => (props.visible
    ? 'opacity: 1;'
    : 'opacity: 0;'
  )}
  transition: all .3s ease-in-out;
`;

export { VideoStyled, ImageStyled };
