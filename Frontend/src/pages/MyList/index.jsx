/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

import Spinner from '../../components/Spinner';
import ListOfItems from '../../components/ListOfItems';

import Container from './styles';
import getAllItemsFromMyList from '../../services/getAllItemsFromMyList';

function MyList() {
  const { currentUser } = useAuth();
  const [itemsMyList, setItemsMyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Obtengo todas las películas y series que tiene guardadas el usuario actual en su lista
    getAllItemsFromMyList({ userId: currentUser?.id })
      .then((data) => {
        setItemsMyList(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <Container>
        <h1>Mi Lista</h1>
        <p>Mis películas y series</p>

        {isLoading
          ? (<Spinner />)
          : (<ListOfItems items={itemsMyList} />)}

      </Container>
    </main>
  );
}

export default MyList;
