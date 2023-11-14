import ListOfSearchResults from '../../components/ListOfSearchResults';
import Spinner from '../../components/Spinner';

import useSearch from '../../hooks/useSearch';

import {
  FormStyled, SearchField, Container,
} from './styles';

function Search() {
  const {
    results, loading, handleSearch, searchParams,
  } = useSearch();

  return (
    <main>
      <FormStyled action="#">
        <SearchField
          type="text"
          name=""
          id=""
          defaultValue={searchParams.get('query')?.toString()}
          placeholder="Título"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </FormStyled>

      <Container>
        <h1>Explorar</h1>

        {loading
          ? (<Spinner />)
          : (
            <ListOfSearchResults
              results={results}
              keyword={searchParams.get('query')?.toString()}
            />
          )}
      </Container>
    </main>
  );
}

export default Search;
