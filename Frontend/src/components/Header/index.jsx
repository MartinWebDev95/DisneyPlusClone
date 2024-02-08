import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { GiFilmSpool } from 'react-icons/gi';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import {
  NavStyled,
  Logo,
  LinkItem,
  NavList,
  HeaderStyled,
  ContainerNav,
  MenuResponsive,
  MenuResponsiveItem,
  MenuResponsiveList,
  ItemMenu,
  ItemMenuResponsive,
  ListItem,
} from './styles';

import ProfileMenu from '../ProfileMenu';

function Header() {
  return (
    <HeaderStyled>
      <NavStyled>
        <ContainerNav>
          <Logo to="/home">
            <img src="/assets/img/logo.svg" alt="Logo" />
          </Logo>

          <NavList>
            <ListItem>
              <LinkItem to="/home">
                <AiFillHome />
                <ItemMenu>
                  Home
                </ItemMenu>
              </LinkItem>
            </ListItem>

            <ListItem>
              <LinkItem to="/search">
                <AiOutlineSearch />
                <ItemMenu>
                  Búsqueda
                </ItemMenu>
              </LinkItem>
            </ListItem>

            <ListItem>
              <LinkItem to="/my-list">
                <AiOutlinePlus />
                <ItemMenu>
                  Mi Lista
                </ItemMenu>
              </LinkItem>
            </ListItem>

            <MenuResponsive>
              <BiDotsVerticalRounded />

              <MenuResponsiveList>
                <MenuResponsiveItem>
                  <LinkItem to="/movies">
                    <GiFilmSpool />
                    <ItemMenuResponsive>
                      Películas
                    </ItemMenuResponsive>
                  </LinkItem>
                </MenuResponsiveItem>

                <MenuResponsiveItem>
                  <LinkItem to="/tv">
                    <MdOutlineOndemandVideo />
                    <ItemMenuResponsive>
                      Series
                    </ItemMenuResponsive>
                  </LinkItem>
                </MenuResponsiveItem>
              </MenuResponsiveList>
            </MenuResponsive>

            <ListItem>
              <LinkItem to="/movies">
                <GiFilmSpool />
                <ItemMenu>
                  Películas
                </ItemMenu>
              </LinkItem>
            </ListItem>

            <ListItem>
              <LinkItem to="/tv">
                <MdOutlineOndemandVideo />
                <ItemMenu>
                  Series
                </ItemMenu>
              </LinkItem>
            </ListItem>
          </NavList>
        </ContainerNav>

        <ProfileMenu />

      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
