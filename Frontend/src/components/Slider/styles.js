import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 8rem auto 0 auto;
  
  @media screen and (max-width: 468px){
    overflow-x: hidden;
  }
`;

const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
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

  @media screen and (max-width: 768px){
    display: none;
  }
`;

const ContainerImages = styled.div`
  width: ${(props) => (`${((props.quantity * 100))}%`)};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  transform: translateX(0%);

  /* @media screen and (max-width: 768px){
    column-gap: 2rem;
  } */
`;

const Slide = styled.div`
  width: 100%;
  //margin-inline: var(--slider-margin-inline);
  margin-inline: 4rem;
  height: 20rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 5px;
  transition: all .3s ease-in-out;
  
  @media screen and (max-width: 768px){
    margin-inline: 0rem;
    border-radius: 0px;
  }
`;

const LinkStyled = styled(Link)`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 20rem;
  outline: 3px solid transparent;

  &:hover{
    outline: 3px solid #D7DEE8;
  } 

  @media screen and (max-width: 768px){
    border-radius: 0px;
    outline: 0px solid #D7DEE8;

    &:hover{
      outline: 0px solid #D7DEE8;
    } 
  }
`;

export {
  Container, ContainerImages, LinkStyled, ButtonStyled, Slide,
};
