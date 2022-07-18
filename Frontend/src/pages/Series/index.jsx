/* eslint-disable react/prop-types */
import React, {
  useEffect, useState,
} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import FilterBar from '../../components/FilterBar';
import FilterList from '../../components/FilterList';
import { getItemsFromDisney } from '../../services/getDataFromAPI';
import { MainStyled, DivSpinner } from './styles';

function Series() {
  const [tv, setTv] = useState([]);
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getItemsFromDisney('tv', page, genre).then((data) => {
      if (page === 1) {
        window.scrollTo(0, 0);
        setTv(data);
      } else {
        setTv((previousData) => previousData.concat(data));
      }

      setLoading(false);
    });
  }, [genre, page]);

  return (
    <>
      <Header />
      <MainStyled>
        <FilterBar
          title="Series"
          setGenre={setGenre}
          setPage={setPage}
          setTv={setTv}
        />
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
      <Footer />
    </>
  );
}

export default Series;
