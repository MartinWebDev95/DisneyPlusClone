import styled from 'styled-components';

const Title = styled.h1`
  color: #DBDBDB;
  font-size: 3em;

  @media screen and (max-width: 468px){
    padding: 0;
    margin: 1rem;
  }
`;

const SectionFormStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding-left: 5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-top: 4.7rem;
  
  ${(props) => (props.opacity === 'false'
    ? 'background-color: rgba(20, 22, 31, 0);'
    : 'background-color: rgba(20, 22, 31, 1);')};

  @media screen and (max-width: 468px){
    flex-direction: column;
    padding-left: 0;
    gap: 0;
  }
`;

const FormStyled = styled.form`
  
  select{
    padding: .6rem;
    border-radius: 50px;
    background-color: #0F1017;
    color: #DBDBDB;
    border: none;
    font-size: 1em;

    &:hover{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 468px){
    margin-bottom: 1rem;
  }
`;

const OptionStyled = styled.option`
  text-transform: uppercase;

  &:checked{
    background-color: rgb(100, 100, 100);
    font-weight: bold;
  }
`;

export {
  Title, FormStyled, OptionStyled, SectionFormStyled,
};
