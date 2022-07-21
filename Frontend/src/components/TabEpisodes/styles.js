import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  padding-left: 5rem;
  
  @media screen and (max-width: 468px){
    padding-left: 0;
    margin: 0 auto;
  }
`;

const ListOfSeasons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SeasonItem = styled.li`
  color: #CACACA;
  
  &:hover{
    cursor: pointer;
  }

  ${(props) => props.selected && `
    color: #F9F9F9;
  `}
`;

export { Container, SeasonItem, ListOfSeasons };
