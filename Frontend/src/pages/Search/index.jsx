import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListOfSearchResults from '../../components/ListOfSearchResults';

import {
  FormStyled, SearchField, Container, SectionStyled,
} from './styles';
import { useAuth } from '../../context/AuthContext';

function Search() {
  const [keyword, setKeyword] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user === null) {
      navigate('/');
    }
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <SectionStyled>
        <Header position="static" />
        <FormStyled action="#">
          <SearchField type="text" name="" id="" value={keyword} placeholder="Título, personaje o género" onChange={handleChange} />
        </FormStyled>
      </SectionStyled>
      <main>
        <Container>
          <h1>Explorar</h1>
          <ListOfSearchResults keyword={keyword} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Search;
