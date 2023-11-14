import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams } from 'react-router-dom';
import { getMostPopularsMoviesDisney, getSearchMovies, getSearchSeries } from '../services/getDataFromAPI';

function useSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hook para crear la query params de la URL
  const [searchParams, setSearchParams] = useSearchParams();

  /* Función que recibe la keyword con el nombre de la película o serie a buscar.
    Si no recibe ninguna keyword, muestra las películas más populares de Disney */
  const searchItems = ({ term }) => {
    try {
      if (term) {
        Promise.all([getSearchMovies(term), getSearchSeries(term)])
          .then(
            (data) => {
              const newStateMovies = data[0].map((item) => ({ ...item, type: 'movie' }));
              const newStateSeries = data[1].map((item) => ({ ...item, type: 'tv' }));

              setResults(newStateMovies.concat(newStateSeries));
            },
          ).finally(() => {
            setLoading(false);
          });
      } else {
        getMostPopularsMoviesDisney()
          .then((data) => {
            setResults(data);
          }).finally(() => {
            setLoading(false);
          });
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  /* Función que crea la URL con la keyword de la película o serie a buscar */
  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      searchParams.set('query', term);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);

    searchItems({ term });
  }, 300);

  /* Cuando se renderice el componente, en caso de que anteriormente
    haya habido una búsqueda, se obtiene la keyword de la URL, en caso contrario,
    se vuelve a mostrar las películas más populares de Disney */
  useEffect(() => {
    searchItems({ term: searchParams.get('query') });
  }, []);

  return {
    results, loading, handleSearch, searchParams,
  };
}

export default useSearch;
