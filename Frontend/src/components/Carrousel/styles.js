import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CarrouselStyled = styled.div`
  //${(props) => (`width:${(props.quantity * 100)}%`)};
  width: fit-content;
  display: flex;
  column-gap: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  position: relative;
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
  top: 48%;
  transform: translateY(-50%);
  height: 20rem;
  width: 5rem;
  z-index: 2;
  transition: all .3s ease-in-out;

  ${(props) => (props.type === 'left'
    ? `left: -3rem;
    opacity: 0;`
    : `right: 0;
    opacity: 0;`)};

  &:hover{
    opacity: 1;
  }

  svg{
    color: #EAEAD7;
    font-size: 4rem;
  }

`;

const ContainerCarrousel = styled.div`
  position: relative;
  margin-left: 3rem;
  padding-bottom: 2rem;
`;

export {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
};
