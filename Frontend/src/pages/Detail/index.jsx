/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import { getItemDetail } from '../../services/getDataFromAPI';
import DetailInfo from '../../components/DetailInfo';

function Detail({ type }) {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    type === 'movie'
      ? (
        getItemDetail(id, type).then((data) => {
          setItem(data);
          setLoading(false);
        })
      ) : (
        getItemDetail(id, type).then((data) => {
          setItem(data);
          setLoading(false);
        })
      );
  }, [id]);

  return (
    // Cuando termine de cargar muestro todos los detalles de la película
    !loading
      ? (
        <>
          <Header position="fixed" />

          <DetailInfo
            item={item}
            id={id}
            type={type}
          />

          <Footer />
        </>
      ) : (
        <Spinner />
      )
  );
}

export default Detail;
