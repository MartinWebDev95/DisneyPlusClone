import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 45px;
  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }
`;

const Profile = styled.div`
  padding: 1rem 1rem 0rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0px 0px 0px 10px;
  width: fit-content;
  height: 0px;
  z-index: 2;
  transition: height .3s ease-in-out;

  &:hover{
    background-color: #131313;
    border: 1px solid #414141;
    height: 300px;
    z-index: 10;
  }
`;

const DivSubmenu = styled.div`
  ul{
    padding-block: 1rem;
    padding-left: 0;
    list-style: none;
    color: white;
    display: none;

    p{
      text-align: center;
      margin-top: 4rem;
    }

    ${Profile}:hover & {
      display: block;
    }
  }
`;

const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-bottom: 1rem;

  ${Profile}:hover & {
    border-bottom: 1px solid #414141;
  }
`;

const NameUser = styled.p`
  color: white;
  display: none;
  margin: 0;

  ${Profile}:hover & {
    display: block;
  }
`;

const ButtonStyled = styled.button`
  display: block;
  width: fit-content;
  margin: 1rem auto;
  border: none;
  background-color: transparent;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;

  &:hover{
    cursor: pointer;
    font-weight: bold;
  }
`;

export {
  Profile,
  DivProfile,
  DivSubmenu,
  NameUser,
  ProfileImage,
  ButtonStyled,
};
