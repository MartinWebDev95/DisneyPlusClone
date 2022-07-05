import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/assets/img/logo.svg';
import { useAuth } from '../../context/AuthContext';
import {
  HeaderStyled, NavStyled, LinkStyled, MainStyled, Container,
} from './styles';

function Login() {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithGoogle();
    navigate('/home');
  };

  return (
    <Container>
      <HeaderStyled>
        <NavStyled>
          <LinkStyled to="/" onClick={handleLogin}>Iniciar Sesión</LinkStyled>
        </NavStyled>
      </HeaderStyled>
      <MainStyled>
        <img src={Logo} alt="Logo Disney" />
        <h1>
          <span>
            Historias que esperas +
          </span>
          <span>
            historias que no imaginas
          </span>
        </h1>
      </MainStyled>
    </Container>
  );
}

export default Login;
