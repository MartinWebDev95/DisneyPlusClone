import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
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
  width: 4%;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }

  img{
    width: 100%;
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

export {
  Nav, Logo, Profile, LinkItem, NavList,
};
