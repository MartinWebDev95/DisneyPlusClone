import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export default List;
