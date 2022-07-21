import styled from 'styled-components';

const ListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
`;

const NotFound = styled.h1`
  text-align: center;
`;

export { ListStyled, NotFound };
