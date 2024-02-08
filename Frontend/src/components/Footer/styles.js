import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: #090B13;
  margin-top: 8rem;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding-block: 1rem;
`;

const Logo = styled(Link)`
  img{
    width: 30%;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Copyright = styled.p`
  color: #CACABF; 
  font-size: .8rem;
`;

const ListFooter = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding: 0;
  margin: 0;

  li{
    color: #CACABF;
    font-size: .7em;

    &:hover{
      color: #fff;
      cursor: pointer;
    }
  }
`;

export {
  FooterStyled, Container, Logo, Copyright, ListFooter,
};
