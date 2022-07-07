import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  margin: 0 auto 4rem auto;
  gap: 2rem;

  div{
    width: 50%;
  }
`;

const Title = styled.h2`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #CCCDCF;
`;

const Sinopsis = styled.p`
  font-size: 1.4em;
  color: #CCCDCF;
`;

const Detail = styled.p`
  color: #BDC7CA;
  
  span{
    display: block;
    color: #E9F9F1;
  }
`;

const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

export {
  Container, ContainerDetails, Title, Sinopsis, Detail,
};
