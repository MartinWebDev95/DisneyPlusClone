import styled from 'styled-components';

const VideoStyled = styled.video`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`;

const ImageStyled = styled.img`
  width: 100%;
  ${(props) => (props.visible
    ? 'opacity: 1;'
    : 'opacity: 0;'
  )}
  transition: all .3s ease-in-out;
`;

const DivOpacity = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(26, 29, 41);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1;
`;

const DivStyled = styled.div`
  background-image: linear-gradient(transparent 25%, transparent 50%, rgb(26, 29, 41) 75%, rgb(26, 29, 41) 100%);
  position: absolute;
  inset: 0px;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  z-index: -2;
`;

export {
  VideoStyled, ImageStyled, DivOpacity, Wrapper, DivStyled,
};
