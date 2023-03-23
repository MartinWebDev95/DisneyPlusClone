import Logo from '/assets/img/logo.svg';

import {
  HeaderStyled, NavStyled, ButtonStyled, MainStyled, Container,
} from './styles';

import { useAuth } from '../../context/AuthContext';

function Login() {
  const { handleLogin } = useAuth();

  return (
    <Container>
      <HeaderStyled>
        <NavStyled>
          <ButtonStyled type="button" onClick={handleLogin}>Iniciar Sesión</ButtonStyled>
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
