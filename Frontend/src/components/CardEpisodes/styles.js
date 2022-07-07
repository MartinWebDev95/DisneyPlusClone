import styled from 'styled-components';

const ImageStyled = styled.img`
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;

  ${(props) => (props.available === false
    ? 'width: 300px'
    : 'width:auto')};
`;

const Title = styled.p`
  color: white;
  margin: 0;
  padding-top: 1rem;
  font-weight: bold;
`;

const Sinopsis = styled.p`
  color: white;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  ImageStyled, Title, Sinopsis, DivStyled,
};
