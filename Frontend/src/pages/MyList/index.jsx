/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useMyList } from '../../context/MyListContext';

import Spinner from '../../components/Spinner';
import ListOfItems from '../../components/ListOfItems';

import Container from './styles';

function MyList() {
  const { user, loading } = useAuth();
  const [itemsMyList, setItemsMyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getAllItemsFromMyList } = useMyList();

  useEffect(() => {
    if (!loading) {
      getAllItemsFromMyList({ userId: user?.id }).then((data) => {
        setItemsMyList(data);
        setIsLoading(false);
      });
    }
  }, [loading]);

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
