import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 8rem auto 0 auto;

  h1{
    color: white;
    font-size: 3em;
  }

  p{
    color: white;
    font-size: 1.3em;
  }
`;

const DivStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
`;

const NoData = styled.p`
  text-align: center;
  padding-top: 2rem;
`;

export { Container, DivStyled, NoData };
