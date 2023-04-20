import styled from 'styled-components/macro';

const TabsStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  border-bottom: 2px solid #363738;
  width: 90%;
  margin: 5rem auto 2rem auto;
`;

const SectionStyled = styled.section`
  overflow: hidden;
`;

const TabStyled = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
  border: none;
  font-size: 1.4em;
  color: #CACACA;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid transparent;

  ${(props) => props.selected && `
    color: #F9F9F9;
    border-bottom: 2px solid #F9F9F9;
  `}

  &:hover{
    border-bottom: 2px solid #CACACA;
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    font-size: 1.2em;
  }

  @media screen and (max-width: 468px){
    font-size: 1em;
  }
`;

export {
  TabsStyled,
  TabStyled,
  SectionStyled,
};
