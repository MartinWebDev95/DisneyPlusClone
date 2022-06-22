import styled from 'styled-components';

const HeaderStyled = styled.header`
  ${(props) => (props.active === false
    ? 'background: linear-gradient(to bottom, rgb(30, 31, 42), transparent)'
    : 'background: #090B13')};
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
`;

export default HeaderStyled;
