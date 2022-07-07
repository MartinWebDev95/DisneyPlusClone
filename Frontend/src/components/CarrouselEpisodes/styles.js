import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
`;

const CarrouselStyled = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 1rem;
  padding-top: 1rem;
  transition: all .3s ease-in-out;
`;

const Title = styled.p`
  color: #EAEAD7;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  border: none;
  cursor: pointer;
  top: 0%;
  height: 80%;
  width: 5rem;
  z-index: 2;
  transition: all .3s ease-in-out;

  ${(props) => (props.type === 'left'
    ? `left: -5rem;
    opacity: 0;`
    : `right: -4rem;
    opacity: 0;`)};

  &:hover{
    opacity: 1;
  }

  svg{
    color: #EAEAD7;
    font-size: 2rem;
  }

`;

const ContainerCarrousel = styled.div`
  position: relative;
  width: 100%;
`;

export {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
};
