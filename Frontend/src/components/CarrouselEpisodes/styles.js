import styled from 'styled-components/macro';

const CarrouselStyled = styled.div`
  display: flex;
  width: calc(100% - 2 * var(--carrousel-padding));
  transform: translateX(0%);
  transition: all .5s ease-in-out;
  
  &:hover{
    cursor: grab;
  } 

  @media (min-width: 1000px){
    &:hover{
      cursor: auto;
    } 
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
  width: var(--carrousel-padding);
  opacity: 0;
  z-index: -1;
  transition: all .3s ease-in-out;

  ${(props) => (props.position === 'left'
    ? 'border-radius: 0px 5px 5px 0px;'
    : 'border-radius: 5px 0px 0px 5px;'
  )}

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

  @media (min-width: 1000px){
    background-color: rgba(0,0,0, .8);
    opacity: 0;
    z-index: 1;

    &:hover{
      opacity: 1;      
    }
  }
`;

const ContainerCarrousel = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export {
  CarrouselStyled, Title, ButtonStyled, ContainerCarrousel,
};
