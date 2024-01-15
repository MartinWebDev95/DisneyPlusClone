import {
  HeaderStyled, NavStyled, ButtonStyled, MainStyled, Container,
} from './styles';

import { useAuth } from '../../context/AuthContext';

function Login() {
  const { handleLoginWithGoogle, handleLoginWithDemoUser } = useAuth();

  return (
    <Container>
      <HeaderStyled>
        <NavStyled>
          <ButtonStyled
            type="button"
            onClick={handleLoginWithGoogle}
          >
            Iniciar Sesión
          </ButtonStyled>

          <ButtonStyled
            type="button"
            onClick={handleLoginWithDemoUser}
          >
            Iniciar Sesión usuario demo
          </ButtonStyled>
        </NavStyled>
      </HeaderStyled>

      <MainStyled>
        <img src="/assets/img/logo.svg" alt="Logo Disney" />

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
