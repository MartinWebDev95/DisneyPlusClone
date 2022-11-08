import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  ${(props) => (props.opacity === 'false'
    ? 'background: linear-gradient(to bottom, rgb(30, 31, 42), transparent)'
    : 'background: #090B13')};
  padding: 1rem 0;

  ${(props) => (props.position === 'fixed'
    ? 'position: fixed;'
    : 'position: static;')};
    
  width: 100%;
  top: 0;
  z-index: 3;
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  width: 70px;
  margin-left: 2rem;
  
  &:hover {
    cursor: pointer;
  }

  img{
    width: 70px;
    display: block;
  }

  @media screen and (max-width: 468px){
    margin-left: 1rem;
  }

`;

const MenuResponsive = styled.li`
  padding-bottom: .2rem;
  padding-right: 1rem;
  &:hover{
    cursor: pointer;
  }
`;

const Profile = styled.div`
  width: fit-content;
  margin-right: 1rem;
`;

const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-bottom: .4rem;
  border-bottom: 1px solid transparent;
  width: 100%;

  ${Profile}:hover & {
    border-bottom: 1px solid #414141;
  }
`;

const DivSubmenu = styled.div`
  background-color: #131313;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 300px;
  border: 1px solid #414141;
  border-radius: 5px;
  transform: translateY(-100%);
  transition: all .3s ease-in-out;

  ${Profile}:hover & {
    transform: translateY(0%);
  }
  
  ul{
    padding-top: 4rem;
    padding-left: 0;
    list-style: none;
    color: white;

    p{
      text-align: center;
      margin-top: 4rem;
    }
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  display: block;
  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }

  ${Profile}:hover & {
    width: 40px;
  }
`;

const NameUser = styled.p`
  color: white;
  display: none;
  margin: 0;

  ${Profile}:hover & {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2rem;
  list-style: none;
  margin: 0;

  li{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
  }

  li:nth-last-child(3){
    display: none;
  }

  @media screen and (max-width: 768px){
    column-gap: 1rem;
    padding-left: 1rem;

    li:nth-last-child(-n+2){
      display: none;
    }

    li:nth-last-child(3){
      display: block;
      position: relative;

      &:hover{
        
        ul{
          position: absolute;
          left: 0px;
          top: 20px;
          background-color: #131313;
          border: 1px solid #414141;
          padding: 1rem;
          border-radius: 5px;

          li{
            display: block;
            padding-bottom: 1rem;
            
            &:last-of-type{
              padding-bottom: 0rem;
            }

            span{
              display: block;
              font-size: .9em;
            }
          }
        }
      }
    }
  }
`;

const LinkItem = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem;
  
  span{

    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      background-color: white;
      transition: all 0.3s ease-in-out;
    }
  
    &:hover::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px){
    span{
      display: none;
    }

    gap: .2rem;
    flex-direction: column;

    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      background-color: white;
      transition: all 0.3s ease-in-out;
    }
  
    &:hover::after {
      width: 100%;
    }
  }
`;

const ButtonStyled = styled.button`
  display: block;
  width: fit-content;
  margin: 1rem auto;
  border: none;
  background-color: transparent;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;

  &:hover{
    cursor: pointer;
    font-weight: bold;
  }
`;

export {
  NavStyled,
  Logo,
  Profile,
  LinkItem,
  NavList,
  HeaderStyled,
  DivProfile,
  DivSubmenu,
  NameUser,
  ProfileImage,
  ButtonStyled,
  MenuResponsive,
};
