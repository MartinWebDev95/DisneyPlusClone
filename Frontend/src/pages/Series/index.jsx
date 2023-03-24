/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import Spinner from '../../components/Spinner';
import FilterBar from '../../components/FilterBar';
import FilterList from '../../components/FilterList';

import { getItemsFromDisney } from '../../services/getDataFromAPI';

import { MainStyled, DivSpinner } from './styles';

function Series() {
  const [tv, setTv] = useState([]);
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemsFromDisney('tv', page, genre)
      .then((data) => {
        if (page === 1) {
          setTv(data);
        } else {
          setTv((previousData) => previousData.concat(data));
        }
      }).finally(
        setLoading(false),
      );
  }, [genre, page]);

  return (
    <>
      <FilterBar
        title="Series"
        setGenre={setGenre}
        setPage={setPage}
        setTv={setTv}
      />

      <MainStyled>
        {
          loading
            ? (
              <DivSpinner>
                <Spinner />
              </DivSpinner>
            ) : (
              <FilterList tv={tv} setPage={setPage} type="tv" />
            )
        }
      </MainStyled>
    </>
  );
}

export default Series;
