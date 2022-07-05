/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {
  AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar,
} from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { GiFilmSpool } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
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
} from './styles';

function Header() {
  const [active, setActive] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const changeHeaderBg = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  window.addEventListener('scroll', changeHeaderBg);

  return (
    <HeaderStyled active={active}>
      <NavStyled>
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
          <DivProfile>
            <NameUser>
              {
                (user?.displayName.length > 20)
                  ? (`${user?.displayName.substring(0, 12)} ...`)
                  : (user?.displayName)
              }
            </NameUser>
            <ProfileImage src={`${user?.photoURL}`} alt="Profile" />
          </DivProfile>
          <DivSubmenu>
            <ul>
              <LinkStyled to="#" onClick={handleLogout}>Cerrar sesión</LinkStyled>
              <p>Coded by Juan Antonio Martín</p>
            </ul>
          </DivSubmenu>
        </Profile>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
