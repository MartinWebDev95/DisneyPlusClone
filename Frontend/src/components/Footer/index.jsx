/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container, Logo, ListFooter, Copyright, FooterStyled,
} from './styles';

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Logo>
          <img src="/assets/img/logo.svg" alt="logo" />
        </Logo>
        <ListFooter>
          <li>
            Política de privacidad
          </li>
          <li>
            Política de cookies
          </li>
          <li>
            Privacidad en R.U. y en la U.E.
          </li>
          <li>
            Contrato de suscripción
          </li>
          <li>
            Ayuda
          </li>
          <li>
            Dispositivos compatibles
          </li>
          <li>
            Acerca de Disney+
          </li>
          <li>
            Anuncios basados en intereses
          </li>
          <li>
            Administrar preferencias
          </li>
        </ListFooter>
        <Copyright>&copy; Disney. Todos los derechos reservados</Copyright>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
