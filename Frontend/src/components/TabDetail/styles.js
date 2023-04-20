import styled from 'styled-components/macro';

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

  @media screen and (max-width: 768px){
    flex-direction: column;

    div{
      width: 100%;
    } 
  }
`;

const Title = styled.h2`
  font-size: 1.8em;
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: #CCCDCF;
`;

const Sinopsis = styled.p`
  font-size: 1.4em;
  color: #CCCDCF;

  @media screen and (max-width: 768px){
    font-size: 1.2em;
  }
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
