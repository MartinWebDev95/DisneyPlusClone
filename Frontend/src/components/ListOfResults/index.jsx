/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getSearchMovies, getSearchSeries } from '../../services/getDataFromAPI';
import Card from '../Card';
import { ListStyled, NotFound } from './styles';

function ListOfResults({ keyword }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (keyword !== '') {
      Promise.all([getSearchMovies(keyword), getSearchSeries(keyword)]).then(
        (data) => {
          setResults(data);
        },
      );
    }
  }, [keyword]);

  return (
    (results[0]?.results.length === 0 && results[1]?.results.length === 0)
      ? (<NotFound>{`No se han encontrado resultados para "${keyword}"`}</NotFound>)
      : (
        <ListStyled>
          {
            results[0]?.results?.map((item) => (
              <Card key={item.id} item={item} type={results[0].type} />
            ))
          }
          {
            results[1]?.results?.map((item) => (
              <Card key={item.id} item={item} type={results[1].type} />
            ))
          }
        </ListStyled>
      )
  );
}

export default ListOfResults;
