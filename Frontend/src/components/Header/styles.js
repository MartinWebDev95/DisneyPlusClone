import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  ${(props) => (props.opacity === 'false'
    ? 'background: linear-gradient(to bottom, rgb(30, 31, 42), transparent)'
    : 'background: #090B13')};

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const ContainerNav = styled.div`
  display: flex;
  align-items: center;
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 0;
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

const ProfileImage = styled.img`
  width: 45px;
  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }
`;

const Profile = styled.div`
  padding: 1rem 1rem 0rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  z-index: 10;
  border: 1px solid transparent;
  border-radius: 0px 0px 0px 10px;
  width: fit-content;
  height: 0px;
  transition: height .3s ease-in-out;

  &:hover{
    background-color: #131313;
    border: 1px solid #414141;
    height: 300px;
  }
`;

const DivSubmenu = styled.div`
  ul{
    padding-block: 1rem;
    padding-left: 0;
    list-style: none;
    color: white;
    display: none;

    p{
      text-align: center;
      margin-top: 4rem;
    }

    ${Profile}:hover & {
      display: block;
    }
  }
`;

const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-bottom: 1rem;

  ${Profile}:hover & {
    border-bottom: 1px solid #414141;
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
  column-gap: 1rem;
  list-style: none;
  margin: 0;
  padding-left: 1rem;

  @media screen and (min-width: 880px){
    column-gap: 2rem;
    padding-left: 2rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;

  &:nth-last-child(-n+2){
    display: none;
  }

  @media screen and (min-width: 780px){
    &:nth-last-child(-n+2){
      display: block;
    }
  }
`;

const MenuResponsive = styled.li`
  padding-right: 1rem;
  display: block;
  position: relative;

  svg{
    color: white;
  }

  &:hover{
    cursor: pointer;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

const MenuResponsiveList = styled.ul`
  position: absolute;
  left: 0px;
  top: 20px;
  background-color: #131313;
  border: 1px solid #414141;
  padding: 1rem;
  border-radius: 5px;
  display: none;

  ${MenuResponsive}:hover &{
    display: block;
  }
`;

const MenuResponsiveItem = styled.li`
  display: block;
  padding-bottom: 1rem;

  &:last-of-type{
    padding-bottom: 0rem;
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
`;

const ItemMenu = styled.span`
  font-size: .9em;
  display: none;

  &::after {
    content: '';
    display: block;
    width: 0%;
    margin-top: .1rem;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (min-width: 780px){
    display: block;
    padding-top: .1rem;
  }
`;

const ItemMenuResponsive = styled(ItemMenu)`
  display: block;
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
  ContainerNav,
  ListItem,
  MenuResponsiveItem,
  MenuResponsiveList,
  ItemMenu,
  ItemMenuResponsive,
};
