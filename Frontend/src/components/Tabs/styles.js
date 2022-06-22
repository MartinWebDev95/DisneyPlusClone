import styled from 'styled-components';

const TabsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  border-bottom: 2px solid #363738;
  width: 90%;
  margin: 5rem auto 0 auto;
`;

const TabStyled = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
  border: none;
  font-size: 1.4em;
  color: #CACACA;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid transparent;

  ${(props) => props.selected && `
    color: #F9F9F9;
    border-bottom: 2px solid #F9F9F9;
  `}

  &:hover{
    border-bottom: 2px solid #CACACA;
    cursor: pointer;
  }
`;

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

const ListOfSeasons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
`;

const SeasonItem = styled.li`
  color: #CACACA;
  
  &:hover{
    cursor: pointer;
  }

  ${(props) => props.selected && `
    color: #F9F9F9;
  `}
`;

export {
  TabsStyled,
  TabStyled,
  Container,
  Title,
  Sinopsis,
  Detail,
  ContainerDetails,
  ListOfSeasons,
  SeasonItem,
};
