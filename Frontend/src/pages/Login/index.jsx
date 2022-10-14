import Logo from '/assets/img/logo.svg';
import {
  HeaderStyled, NavStyled, LinkStyled, MainStyled, Container,
} from './styles';

function Login() {
  return (
    <Container>

      <HeaderStyled>
        <NavStyled>
          <LinkStyled to="/">Iniciar Sesión</LinkStyled>
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
