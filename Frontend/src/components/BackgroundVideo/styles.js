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

const DivOpacity = styled.div`
  display: none;

  @media screen and (max-width: 468px){
    display: block;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgba(26, 29, 41, 0), rgba(26, 29, 41, 1), rgba(26, 29, 41, 0), rgba(26, 29, 41, 0)); 
  }
`;

export { VideoStyled, ImageStyled, DivOpacity };
