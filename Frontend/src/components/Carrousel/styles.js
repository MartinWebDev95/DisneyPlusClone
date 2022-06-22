import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CarrouselStyled = styled.div`
  display: flex;
  column-gap: 1rem;
  overflow-x: hidden;
  padding-bottom: 2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  transform: translateX(4%);
`;

const Title = styled.p`
  color: #EAEAD7;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  border: none;
  cursor: pointer;
  top: 48%;
  transform: translateY(-50%);
  height: 20rem;
  width: 5rem;
  z-index: 2;

  ${(props) => (props.type === 'left'
    ? `left: 0;
    display: none;`
    : 'right: 0;')};

  svg{
    color: #EAEAD7;
    font-size: 3rem;
  }

`;

const ContainerCarrousel = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
};
