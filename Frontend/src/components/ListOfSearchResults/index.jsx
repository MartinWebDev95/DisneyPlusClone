/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getSearchMovies, getSearchSeries, getMostPopularsMoviesDisney } from '../../services/getDataFromAPI';
import Card from '../Card';
import { ListStyled, NotFound } from './styles';

function ListOfResults({ keyword }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (keyword !== '') {
      Promise.all([getSearchMovies(keyword), getSearchSeries(keyword)])
        .then((data) => {
          const newStateMovies = data[0].map((item) => ({ ...item, type: 'movie' }));
          const newStateSeries = data[1].map((item) => ({ ...item, type: 'tv' }));

          setResults(newStateMovies.concat(newStateSeries));
        });
    } else {
      getMostPopularsMoviesDisney()
        .then((data) => {
          setResults(data);
        });
    }
  }, [keyword]);

  return (
    (results.length === 0 && keyword !== '')
      ? (
        <NotFound>{`No se han encontrado resultados para "${keyword}"`}</NotFound>
      ) : (
        <ListStyled>
          {
            results?.map((item) => (
              <Card
                key={item.id}
                item={item}
                type={item.type ? item.type : 'movie'}
                width="max-content"
                height="no-carousel"
              />
            ))
          }
        </ListStyled>
      )
  );
}

export default ListOfResults;
