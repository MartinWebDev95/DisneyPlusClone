import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  padding-left: 0rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const ListOfSeasons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SeasonItem = styled.button`
  color: #CACACA;
  background-color: transparent;
  border: none;
  font-size: 1em;
  font-weight: bold;
  
  &:hover{
    cursor: pointer;
    color: #F9F9F9;
  }

  &[aria-selected=true]{
    color: #FFFF;
    text-decoration: underline; 
  }
`;

export { Container, SeasonItem, ListOfSeasons };
