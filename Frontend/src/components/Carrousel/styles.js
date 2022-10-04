import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CarrouselStyled = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 1rem;
  padding-top: 1.4rem;
  position: relative;
  transition: all .3s ease-in-out;
  overflow-x: hidden;
  padding-inline: 4rem;
  border: 1px solid green;

  @media screen and (max-width: 468px){
    padding-bottom: .5rem;
    padding-left: 0rem;
    margin-right: 0;
  }
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
  z-index: 3;
  transition: all .3s ease-in-out;

  ${(props) => (props.type === 'left'
    ? `left: 0rem;
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
  padding-bottom: 2rem;
  border: 1px solid red;
  overflow-x: hidden;
  
  @media screen and (max-width: 468px){
    padding-bottom: .5rem;
    margin-left: 0rem;
  }
  
`;

export {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container,
};
