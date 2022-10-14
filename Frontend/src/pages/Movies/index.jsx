/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import {
  useEffect, useState,
} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import FilterBar from '../../components/FilterBar';
import FilterList from '../../components/FilterList';
import { getItemsFromDisney } from '../../services/getDataFromAPI';
import { MainStyled, DivSpinner, SectionStyled } from './styles';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getItemsFromDisney('movie', page, genre).then((data) => {
      if (page === 1) {
        window.scrollTo(0, 0);
        setMovies(data);
      } else {
        setMovies((previousData) => previousData.concat(data));
      }

      setLoading(false);
    });
  }, [genre, page]);

  return (
    <>
      <SectionStyled>
        <Header />

        <FilterBar
          title="Películas"
          setGenre={setGenre}
          setPage={setPage}
          setMovies={setMovies}
        />
      </SectionStyled>

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

      <Footer />
    </>
  );
}

export default Movies;
