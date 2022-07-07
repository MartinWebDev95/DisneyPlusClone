import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  padding-left: 5rem;
`;

const ListOfSeasons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
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
