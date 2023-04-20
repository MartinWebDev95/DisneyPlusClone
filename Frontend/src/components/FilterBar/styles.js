import styled from 'styled-components/macro';

const Title = styled.h1`
  color: #DBDBDB;
  font-size: clamp(2rem, 6vw, 3rem); 
  margin: 0;
`;

const SectionFormStyled = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-left: 0;
  padding-top: 7rem;
  padding-bottom: 3rem;
  flex-direction: column;
  gap: 0;
  
  ${(props) => (props.opacity === 'false'
    ? 'background-color: rgba(20, 22, 31, 0);'
    : 'background-color: rgba(20, 22, 31, 1);')};

  @media screen and (min-width: 500px){
    flex-direction: row;
    gap: 2rem;
    padding-left: 5rem;
  }
`;

const FormStyled = styled.form`
  padding-top: 1rem;
  
  select{
    padding: .6rem;
    border-radius: 50px;
    background-color: #0F1017;
    color: #DBDBDB;
    border: none;
    font-size: clamp(.8em, 3vw, 1em); 

    &:hover{
      cursor: pointer;
    }
  }

  @media screen and (min-width: 500px){
    padding-top: 0rem;
  }
`;

const OptionStyled = styled.option`
  text-transform: uppercase;
  font-size: clamp(.8em, 2.5vw, 1em);

  &:checked{
    background-color: rgb(100, 100, 100);
    font-weight: bold;
  }
`;

export {
  Title, FormStyled, OptionStyled, SectionFormStyled,
};
