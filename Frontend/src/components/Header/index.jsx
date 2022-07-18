/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  AiFillHome, AiOutlineSearch, AiOutlinePlus,
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
import useOpacity from '../../hooks/useOpacity';

function Header() {
  const { opacity } = useOpacity();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <HeaderStyled opacity={opacity.toString()}>
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
            <GiFilmSpool />
            <LinkItem to="/movies">
              Películas
            </LinkItem>
          </li>
          <li>
            <MdOutlineOndemandVideo />
            <LinkItem to="/tv">
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
