import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListOfSearchResults from '../../components/ListOfSearchResults';

import {
  FormStyled, SearchField, Container, SectionStyled,
} from './styles';

function Search() {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <SectionStyled>
        <Header position="static" />

        <FormStyled action="#">
          <SearchField
            type="text"
            name=""
            id=""
            value={keyword}
            placeholder="Título, personaje o género"
            onChange={handleChange}
          />
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
