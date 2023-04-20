import styled from 'styled-components/macro';

const FormStyled = styled.form`
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  padding-top: 4.7rem;
`;

const SearchField = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  font-size: clamp(1.8em, 6vw, 2.8em); 
  color: #939498;
  font-weight: bold;
  background-color: rgb(75, 78, 90);
  border: none;

  &::placeholder{
    color: #939498;
  }

  @media screen and (min-width: 768px){
    padding: 2rem 4rem;
  }
`;

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 12rem;

  h1{
    color: #F9F9F9;
    font-size: 1.2em;
  }

  @media screen and (min-width: 768px){
    margin-top: 15rem;
  }
`;

const SectionStyled = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export {
  FormStyled,
  SearchField,
  Container,
  SectionStyled,
};
