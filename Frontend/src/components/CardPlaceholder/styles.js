import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border: 3px solid #161824;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;
  width: 227px;
  height: 20rem;
  margin-bottom: 1.4rem;
  background: #161824;
  overflow: hidden;
  
  @media screen and (max-width: 468px){
    border: none;
    
    &:hover{
      border: none;
      transform: none;
    }
  }
  
  div{
    position: absolute;
    border-radius: 0.5rem;
    background: linear-gradient(146deg, rgba(6,8,16,1) 30%, rgba(43,47,62,1) 45%, rgba(6,8,16,1) 100%);
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    transform: scale(1);
    animation: load 1s linear infinite alternate;

    @keyframes load{
      to{
        transform: scale(3);
      }
    }
  }
`;

export default Card;
