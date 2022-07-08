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
  display: grid;
  grid-template-columns: repeat(auto-fit, 20%);
  justify-content: ${(props) => (props.quantity)};
  gap: 2rem;
`;

const NoData = styled.p`
  text-align: center;
  padding-top: 2rem;
`;

export { Container, DivStyled, NoData };
