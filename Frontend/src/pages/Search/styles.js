import styled from 'styled-components';

const FormStyled = styled.form`
  position: fixed;
  width: 100%;
  top: 14%;
  left: 0%;
  z-index: 2;
`;

const SearchField = styled.input`
  width: 100%;
  padding: 2rem 4rem;
  font-size: 2.8em;
  color: #939498;
  font-weight: bold;
  background-color: rgb(75, 78, 90);
  border: none;

  &::placeholder{
    color: #939498;
  }
`;

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 15rem;

  h1{
    color: #F9F9F9;
    font-size: 1.2em;
  }
`;

export {
  FormStyled,
  SearchField,
  Container,
};
