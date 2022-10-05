/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import DetailInfo from '../../components/DetailInfo';
import useFetchFromApi from '../../hooks/useFetchFromApi';

function Detail({ type }) {
  const { id } = useParams();

  const url = `${import.meta.env.VITE_API_URL}${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`;

  const { data, isLoading } = useFetchFromApi(url);

  return (
    // Cuando termine de cargar muestro todos los detalles de la película
    !isLoading
      ? (
        <>
          <Header position="fixed" />

          <DetailInfo
            item={data}
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
