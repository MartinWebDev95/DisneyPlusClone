import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 8rem;
  position: relative;
  width: 90%;
  margin: 8rem auto 0 auto;
`;

const ContainerImages = styled.div`
  ${(props) => (`width:${((props.quantity * 100) + 100)}%`)};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
  transform: translateX(0%);
`;

const LinkStyled = styled(Link)`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  /* aspect-ratio: 16 / 9;
  object-fit: contain; */
  border-radius: 0.5rem;
  display: block;
  width: 100%;
  height: 20rem;
`;

const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  ${(props) => ((props.align === 'left') ? 'left: 0' : 'right: 0')};

  svg{
    color: #EAEAD7;
    font-size: 3rem;
    transition: .3s all ease-in-out;

    &:hover{
      cursor: pointer;
      color: #A2A2A2;
    }
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 20rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;
  border: 3px solid transparent;
  transition: all .3s ease-in-out;
  
  &:hover{
    border: 3px solid #D7DEE8;
  }
`;

export {
  Container, ContainerImages, LinkStyled, ButtonStyled, Slide,
};
