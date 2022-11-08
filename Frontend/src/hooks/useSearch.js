import { useState, useEffect } from 'react';
import { getMostPopularsMoviesDisney, getSearchMovies, getSearchSeries } from '../services/getDataFromAPI';

function useSearch() {
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword !== '') {
      Promise.all([getSearchMovies(keyword), getSearchSeries(keyword)]).then(
        (data) => {
          const newStateMovies = data[0].map((item) => ({ ...item, type: 'movie' }));
          const newStateSeries = data[1].map((item) => ({ ...item, type: 'tv' }));

          setResults(newStateMovies.concat(newStateSeries));
          setLoading(false);
        },
      );
    } else {
      getMostPopularsMoviesDisney().then((data) => {
        setResults(data);
        setLoading(false);
      });
    }
  }, [keyword]);

  return {
    results, keyword, loading, handleChange,
  };
}

export default useSearch;
