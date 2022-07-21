import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  width: 100%;
  background-color: transparent;
`;

const NavStyled = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  
  @media screen and (max-width: 468px){
    justify-content: center; 
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgba(0,0,0, 0.8);
  padding: 1rem 1.5rem;
  font-size: 1.2em;
  letter-spacing: .1em;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: white;
    color: black;
  }
`;

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;

  img{
    width: 120px;

    @media screen and (max-width: 468px){
      padding-top: 2rem;
    }
  }

  h1{
    color: white;
    font-size: 2.6em;
    padding-top: 4rem;
    
    span{
      display: block;
      margin-bottom: .5rem;
    }
    
    @media screen and (max-width: 468px){
      text-align: center; 
      font-size: 2em;
      padding-top: 2rem;
    }
  }

  @media screen and (max-width: 468px){
    place-items: center; 
  }
`;

const Container = styled.div`
  background-image: url("../../../public/assets/img/original.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

export {
  HeaderStyled, NavStyled, LinkStyled, MainStyled, Container,
};
