import styled from 'styled-components';

const SectionDataStyled = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat( auto-fill, minmax(150px, 1fr) );
  padding-top: 1rem;
  width: 90%;
  margin: 0 auto;
  padding-top: 10rem;

  @media screen and (min-width: 480px){
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
  }
`;

const ButtonStyled = styled.button`
  display: block;
  margin: 4rem auto 0 auto;
  padding: .7rem 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  color: white;
  transition: all .3s ease-in-out;

  &:hover{
    border: 2px solid white;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export {
  SectionDataStyled, ButtonStyled,
};
