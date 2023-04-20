import styled from 'styled-components/macro';

const ListStyled = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
  padding-top: 1rem;
`;

const NotFound = styled.h1`
  text-align: center;
`;

export { ListStyled, NotFound };
