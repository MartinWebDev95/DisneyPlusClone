import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  padding-top: 8rem;
  
  @media screen and (max-width: 468px){
    overflow-x: hidden;
  }
`;

const Wrapper = styled.div`
  position: relative;
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
    color: black;
    font-size: 2rem;
    transition: .3s all ease-in-out;
    border-radius: 50%;
    background: #EAEAD7;

    &:hover{
      cursor: pointer;
    }

    @media screen and (min-width: 768px){
      color: #EAEAD7;
      background: transparent;
      border-radius: none;
      font-size: 3rem;

      &:hover{
        cursor: pointer;
        color: #A2A2A2;
      }
    } 
  }
`;

const ContainerImages = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-flow: row nowrap;
  align-items: center;
  transform: translateX(0%);
`;

const Slide = styled.div`
  min-width: 100%;
  padding-inline: 4rem;
  height: 20rem;
  border-radius: 5px;
  transition: all .3s ease-in-out;
  
  @media screen and (max-width: 768px){
    padding-inline: 0rem;
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
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;

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
  Container, Wrapper, ContainerImages, LinkStyled, ButtonStyled, Slide,
};
