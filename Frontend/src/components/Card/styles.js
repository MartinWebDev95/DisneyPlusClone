import styled from 'styled-components';

const CardStyled = styled.div`
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
`;

const ImageStyled = styled.img`
  display: block;
  border-radius: 0.5rem;
  border: 3px solid transparent;
  transform: scale(1);
  transition: all .3s ease-in-out;

  ${(props) => (props.available === false
    ? 'width: 100%;'
    : 'min-width: 100%;')};

  &:hover img {
    border: 3px solid #D7DEE8;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export { CardStyled, ImageStyled };
