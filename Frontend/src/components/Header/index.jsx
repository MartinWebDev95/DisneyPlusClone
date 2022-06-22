/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import HeaderStyled from './styles';
import NavBar from '../NavBar';

function Header() {
  const [active, setActive] = useState(false);

  const changeHeaderBg = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  window.addEventListener('scroll', changeHeaderBg);

  return (
    <HeaderStyled active={active}>
      <NavBar />
    </HeaderStyled>
  );
}

export default Header;
