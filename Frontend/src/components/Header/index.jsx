import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
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
  ButtonStyled,
  MenuResponsive,
} from './styles';

import useOpacity from '../../hooks/useOpacity';
import { useAuth } from '../../context/AuthContext';

function Header({ position }) {
  const { opacity } = useOpacity();
  const { user, handleLogout } = useAuth();

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
              {`${user?.displayName.substring(0, 15)} ...`}
            </NameUser>
            <ProfileImage
              src={`${user?.photos[0]?.value}`}
              referrerpolicy="no-referrer"
              alt="Profile"
            />
          </DivProfile>

          <DivSubmenu>
            <ul>
              <ButtonStyled type="button" onClick={handleLogout}>Cerrar sesión</ButtonStyled>
              <p>Coded by Juan Antonio Martín</p>
            </ul>
          </DivSubmenu>
        </Profile>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
