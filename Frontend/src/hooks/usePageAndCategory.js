import { useEffect, useState } from 'react';
import { getItemsFromDisney } from '../services/getDataFromAPI';

function usePageAndCategory({ type }) {
  const [items, setItems] = useState([]);
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Cuando se cambia de página entre películas y series se actualizan
  // los estados al valor por defecto
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }

    if (genre !== '') {
      setGenre('');
    }
  }, [type]);

  useEffect(() => {
    getItemsFromDisney(type, page, genre)
      .then((data) => {
        if (page === 1) {
          setItems(data);
        } else {
          setItems((previousData) => previousData.concat(data));
        }
      }).finally(
        setLoading(false),
      );
  }, [type, genre, page]);

  // Se cambia el género
  const handleGenre = (e) => {
    window.scrollTo(0, 0);
    setItems([]);
    setGenre(e.target.value);
    setPage(1);
  };

  // Actualizar la página
  const handlePage = () => {
    setPage((previousPage) => previousPage + 1);
  };

  return {
    loading, items, genre, setPage, handleGenre, handlePage,
  };
}

export default usePageAndCategory;
