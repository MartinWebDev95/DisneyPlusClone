import styled from 'styled-components';

const MainStyled = styled.main`
  margin: 5.4rem auto 0 auto;
`;

const Title = styled.h1`
  color: #DBDBDB;
  font-size: 3em;
`;

const SectionDataStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  padding-top: 10rem;
`;

const SectionFormStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: fixed;
  z-index: 2;
  width: 100%;
  padding-left: 5rem;
  ${(props) => (props.opacity === 'false'
    ? 'background-color: rgba(20, 22, 31, 0);'
    : 'background-color: rgba(20, 22, 31, 1);')};
`;

const FormStyled = styled.form`
  select{
    padding: .6rem;
    border-radius: 50px;
    background-color: #0F1017;
    color: #DBDBDB;
    border: none;
  }
`;

const OptionStyled = styled.option`
  text-transform: uppercase;

  &:checked{
    background-color: rgb(100, 100, 100);
    font-weight: bold;
  }

  /* &::before{
    content: "";
    display: block;
    background-color: #DBDBDB;
    width: 10%;
    height: 100px;
  } */
`;

export {
  Title, SectionDataStyled, MainStyled, FormStyled, OptionStyled, SectionFormStyled,
};
