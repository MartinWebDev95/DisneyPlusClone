import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  padding-left: 4rem;
  margin-bottom: 2rem;
  
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
