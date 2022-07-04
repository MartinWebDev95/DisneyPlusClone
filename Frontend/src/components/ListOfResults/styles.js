import styled from 'styled-components';

const ListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const NotFound = styled.h1`
  text-align: center;
`;

export { ListStyled, NotFound };
