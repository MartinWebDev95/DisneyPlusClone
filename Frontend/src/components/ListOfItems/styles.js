import styled from 'styled-components';

const DivStyled = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat( auto-fill, minmax(150px, 1fr) );
  padding-top: 1rem;
  
  @media screen and (min-width: 480px){
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
  }
`;

const NoData = styled.p`
  text-align: center;
  padding-top: 2rem;
`;

export { DivStyled, NoData };
