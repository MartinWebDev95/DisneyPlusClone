import styled from 'styled-components';

const ListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20%);
  justify-content: space-between;
  gap: 2rem;
`;

const NotFound = styled.h1`
  text-align: center;
`;

export { ListStyled, NotFound };
