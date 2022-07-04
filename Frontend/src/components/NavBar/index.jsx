import React from 'react';
import {
  AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar,
} from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { GiFilmSpool } from 'react-icons/gi';
import {
  Nav, Logo, Profile, LinkItem, NavList,
} from './styles';

function NavBar() {
  return (
    <Nav>
      <Logo to="/home">
        <img src="/assets/img/logo.svg" alt="Logo" />
      </Logo>
      <NavList>
        <li>
          <AiFillHome />
          <LinkItem to="/home">
            Home
          </LinkItem>
        </li>
        <li>
          <AiOutlineSearch />
          <LinkItem to="/search">
            Búsqueda
          </LinkItem>
        </li>
        <li>
          <AiOutlinePlus />
          <LinkItem to="/my-list">
            Mi Lista
          </LinkItem>
        </li>
        <li>
          <AiFillStar />
          <LinkItem to="/originals">
            Originales
          </LinkItem>
        </li>
        <li>
          <GiFilmSpool />
          <LinkItem to="#">
            Películas
          </LinkItem>
        </li>
        <li>
          <MdOutlineOndemandVideo />
          <LinkItem to="#">
            Series
          </LinkItem>
        </li>
      </NavList>
      <Profile>
        <img src="/assets/img/profile.png" alt="Profile" />
      </Profile>
    </Nav>
  );
}

export default NavBar;
