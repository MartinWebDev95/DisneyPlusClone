import styled from 'styled-components';

const Background = styled.div`
  background: linear-gradient(to right, rgb(30, 31, 42), rgb(30, 31, 42, 0.1)), url(${(props) => props.bgImg}) no-repeat center;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  color: #fff;
  padding-top: 8rem;
`;

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
  color: #fff;
  margin: 0;
  width: 50%;

  @media screen and (max-width: 768px){
    font-size: 3em;
  }
`;

const Genres = styled.div`
  display: flex;
  gap: 1rem;

  span{
    color: #fff;
  }
`;

const Sinopsis = styled.p`
  font-size: 1.4em;
  width: 70%;
  margin: 0;

  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 1.2em;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-block: 2rem;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const ButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  gap: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 768px){
    padding: 0rem 2rem;
  }
`;

const ButtonSecondary = styled.button`
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgb(30, 31, 42);
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
    color: rgb(30, 31, 42);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 768px){
    padding: 0rem 2rem;
  }
`;

const RoundedButton = styled.button`
  border-radius: 50%;
  border: 2px solid #fff;
  width: 40px;
  height: 40px;
  background-image: url(/assets/img/icon-plus.svg); 
  background-color: black;

  &[aria-selected=true]{
    background-image: url(/assets/img/icon-tick.svg); 
    background-color: black;
  }

  &:hover{
    background-color: #fff;
    cursor: pointer;

    &[aria-selected=false]{
      background-image: url(/assets/img/icon-plus-black.svg); 
    }
  }

  @media (min-width: 768px){
    width: 50px;
    height: 50px;
  }
`;

export {
  Background,
  Container,
  Title,
  Genres,
  Sinopsis,
  ContainerButtons,
  ButtonPrimary,
  ButtonSecondary,
  RoundedButton,
};
