import { useEffect, useState } from 'react';

import Spinner from '../../components/Spinner';
import FilterBar from '../../components/FilterBar';
import FilterList from '../../components/FilterList';

import { getItemsFromDisney } from '../../services/getDataFromAPI';

import { MainStyled, DivSpinner } from './styles';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemsFromDisney('movie', page, genre)
      .then((data) => {
        if (page === 1) {
          setMovies(data);
        } else {
          setMovies((previousData) => previousData.concat(data));
        }
      }).finally(
        setLoading(false),
      );
  }, [genre, page]);

  return (
    <>
      <FilterBar
        title="Películas"
        setGenre={setGenre}
        setPage={setPage}
        setMovies={setMovies}
      />

      <MainStyled>
        {
          loading
            ? (
              <DivSpinner>
                <Spinner />
              </DivSpinner>
            ) : (
              <FilterList movies={movies} setPage={setPage} type="movie" />
            )
        }
      </MainStyled>
    </>
  );
}

export default Movies;
