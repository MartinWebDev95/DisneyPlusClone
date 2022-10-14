import styled from 'styled-components';

const SectionStyled = styled.section`
  padding-bottom: 2rem;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CarrouselStyled = styled.div`
  display: flex;
  flex-grow: 1;
  transform: translateX(0%);
  transition: all .5s ease-in-out;
  
  &:hover{
    cursor: grab;
  }
`;

const Title = styled.p`
  color: #EAEAD7;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  flex-grow: 0;
  flex-shrink: 0;
  width: var(--slider-padding);
  opacity: 0;
  z-index: -1;
  transition: all .3s ease-in-out;


  svg{
    color: #EAEAD7;
    font-size: 3rem;
    opacity: 1;

    @media (min-width: 1000px){
      font-size: 4rem;
    }
  }
  
  &:hover{
    cursor: pointer;
  }

  @media (min-width: 768px){
    ${(props) => (props.show
    ? `z-index: 1;
      opacity: 1;`
    : `z-index: -1;
      opacity: 0;`)}
  }
`;

const ContainerCarrousel = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel, Container, SectionStyled,
};
