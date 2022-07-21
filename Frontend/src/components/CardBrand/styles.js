import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  margin-block: 2rem;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const CardStyle = styled(Link)`
  position: relative;
  border-radius: .5rem;
  border: 3px solid #4D4D4D;
  width: 50%;
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
  }
`;

export { Wrapper, CardStyle };
