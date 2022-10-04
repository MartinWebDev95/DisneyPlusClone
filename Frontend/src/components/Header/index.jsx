/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import {
  AiFillHome, AiOutlineSearch, AiOutlinePlus,
} from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { GiFilmSpool } from 'react-icons/gi';
import { BiDotsVerticalRounded } from 'react-icons/bi';
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
  MenuResponsive,
} from './styles';
import useOpacity from '../../hooks/useOpacity';

function Header({ position }) {
  const { opacity } = useOpacity();

  return (
    <HeaderStyled opacity={opacity.toString()} position={position}>
      <NavStyled>
        <Logo to="/home">
          <img src="/assets/img/logo.svg" alt="Logo" />
        </Logo>
        <NavList>
          <li>
            <LinkItem to="/home">
              <AiFillHome />
              <span>
                Home
              </span>
            </LinkItem>
          </li>
          <li>
            <LinkItem to="/search">
              <AiOutlineSearch />
              <span>
                Búsqueda
              </span>
            </LinkItem>
          </li>
          <li>
            <LinkItem to="/my-list">
              <AiOutlinePlus />
              <span>
                Mi Lista
              </span>
            </LinkItem>
          </li>
          <MenuResponsive>
            <BiDotsVerticalRounded />
            <ul>
              <li>
                <LinkItem to="/movies">
                  <GiFilmSpool />
                  <span>
                    Películas
                  </span>
                </LinkItem>
              </li>
              <li>
                <LinkItem to="/tv">
                  <MdOutlineOndemandVideo />
                  <span>
                    Series
                  </span>
                </LinkItem>
              </li>
            </ul>
          </MenuResponsive>
          <li>
            <LinkItem to="/movies">
              <GiFilmSpool />
              <span>
                Películas
              </span>
            </LinkItem>
          </li>
          <li>
            <LinkItem to="/tv">
              <MdOutlineOndemandVideo />
              <span>
                Series
              </span>
            </LinkItem>
          </li>
        </NavList>
        <Profile>
          <DivProfile>
            <NameUser>
              Juan Antonio Martín
            </NameUser>
            <ProfileImage src="/assets/img/profile.png" alt="Profile" />
          </DivProfile>
          <DivSubmenu>
            <ul>
              <LinkStyled to="#">Cerrar sesión</LinkStyled>
              <p>Coded by Juan Antonio Martín</p>
            </ul>
          </DivSubmenu>
        </Profile>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
