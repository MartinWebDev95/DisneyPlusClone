import ListOfSearchResults from '../../components/ListOfSearchResults';
import Spinner from '../../components/Spinner';

import useSearch from '../../hooks/useSearch';

import {
  FormStyled, SearchField, Container,
} from './styles';

function Search() {
  const {
    results, keyword, loading, handleChange,
  } = useSearch();

  return (
    <main>
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

      <Container>
        <h1>Explorar</h1>

        {loading
          ? (<Spinner />)
          : (<ListOfSearchResults results={results} keyword={keyword} />)}
      </Container>
    </main>
  );
}

export default Search;
