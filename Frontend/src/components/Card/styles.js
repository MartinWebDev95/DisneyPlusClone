import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  padding: 0.25rem;
  flex: 0 0 calc(100% / var(--items-per-screen));

  ${(props) => ((props.width === 'max-content')
    ? 'max-width: max-content'
    : 'max-width: calc(100% / var(--items-per-screen));')}

  &:first-of-type{
    padding-left: 0;
  }

  &:last-of-type{
    padding-right: 0;
  }

`;

const ImageStyled = styled.img`
  display: block;
  border: 3px solid #161824;
  transform: scale(1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  border-radius: 0.5rem;
  transition: all .3s ease-in-out;
  width: 100%;
  object-fit: cover;
  background-color: #171822;

  ${(props) => ((props.height === 'no-carousel')
    ? 'height: auto;'
    : 'height: var(--items-height);')}


  &:hover{
    border: 3px solid #D7DEE8;
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (max-width: 468px){
    border: none;

    ${(props) => ((props.height === 'no-carousel')
    ? 'height: auto;'
    : 'height: 15rem;')}

    &:hover{
      border: none;
      transform: none;
    }
  }
`;

export { ImageStyled, LinkStyled };
