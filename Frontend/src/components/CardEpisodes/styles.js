import styled from 'styled-components';

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  height: 10rem;
  aspect-ratio: 16/9;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const Title = styled.p`
  color: white;
  margin: 0;
  padding-top: 1rem;
  font-weight: bold;
`;

const Sinopsis = styled.p`
  color: white;
`;

const DivStyled = styled.div`
  padding: 0.25rem;
  flex: 0 0 calc(100% / var(--items-per-screen));
  max-width: calc(100% / var(--items-per-screen));
  
  &:first-of-type{
    padding-left: 0;
  }
  
  &:last-of-type{
    padding-right: 0;
  } 
  
  div{
    display: flex;
    flex-direction: column;
  }
`;

export {
  ImageStyled, Title, Sinopsis, DivStyled,
};
