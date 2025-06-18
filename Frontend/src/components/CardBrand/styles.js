import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardStyle = styled(Link)`
  position: relative;
  border-radius: .5rem;
  border: 3px solid #4D4D4D;
  width: 50%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  transform: scale(1);
  transition: all .3s ease-in-out;
  
  img{
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  video{
    border-radius: .5rem;
    width: 100%;
    display: block;
    opacity: 0;
  }
  
  &:hover {
    border: 3px solid #D7DEE8;
    cursor: pointer;
    transform: scale(1.05);

    video {
      opacity: 1;
    };
  }

  @media screen and (max-width: 768px){
    width: 100%;

    video{
      display: none;
    }
  }
`;

export default CardStyle;
