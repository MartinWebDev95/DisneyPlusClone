/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import DetailInfo from '../../components/DetailInfo';
import { getItemDetail } from '../../services/getDataFromAPI';

function Detail({ type }) {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);

    getItemDetail(id, type)
      .then((data) => {
        setItemDetail(data);
      });

    setLoading(false);
  }, [id]);

  return (
    // Cuando termine de cargar muestro todos los detalles de la película
    !isLoading
      ? (
        <>
          <Header position="fixed" />

          <DetailInfo
            item={itemDetail}
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
