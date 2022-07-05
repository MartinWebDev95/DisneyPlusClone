import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  ${(props) => (props.active === false
    ? 'background: linear-gradient(to bottom, rgb(30, 31, 42), transparent)'
    : 'background: #090B13')};
  padding: 1rem 0;
  position: fixed;
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
  width: 7%;
  margin-left: 2rem;
  
  &:hover {
    cursor: pointer;
  }

  img{
    width: 100%;
    display: block;
  }
`;

const Profile = styled.a`
  width: 3%;
  margin-right: 1rem;

  &:hover{
    width: fit-content;
  }
`;

const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-bottom: .4rem;
  border-bottom: 1px solid transparent;

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
  width: 18%;
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
  width: 100%;
  display: block;
  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }

  ${Profile}:hover & {
    width: 19%;
  }
`;

const NameUser = styled.p`
  color: white;
  display: none;

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

  li{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
  }
`;

const LinkItem = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-left: .5rem;
  color: white;
  text-decoration: none;

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
`;

const LinkStyled = styled.a`
  display: block;
  width: fit-content;
  margin: 1rem auto;

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
  LinkStyled,
};

export default HeaderStyled;
