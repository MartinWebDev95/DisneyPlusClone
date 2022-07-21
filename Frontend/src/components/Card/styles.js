import styled from 'styled-components';

const ImageStyled = styled.img`
  display: block;
  border: 3px solid #161824;
  transform: scale(1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;
  transition: all .3s ease-in-out;
  min-width: fit-content;
  object-fit: cover;
  height: 20rem;
  margin-bottom: 1.4rem;
  

  &:hover{
    border: 3px solid #D7DEE8;
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (max-width: 468px){
    border: none;

    &:hover{
      border: none;
      transform: none;
    }
  }
`;

export default ImageStyled;
