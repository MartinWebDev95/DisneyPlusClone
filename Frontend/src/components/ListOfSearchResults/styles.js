import styled from 'styled-components';

const ListStyled = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat( auto-fill, minmax(150px, 1fr) );
  padding-top: 1rem;
  
  @media screen and (min-width: 480px){
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
  }
`;

const NotFound = styled.h1`
  text-align: center;
`;

export { ListStyled, NotFound };
