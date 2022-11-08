/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useMyList } from '../context/MyListContext';
import { getItemDetail } from '../services/getDataFromAPI';

function useManipulateMyList({ id, type }) {
  let counter = 0;

  const { user, loading } = useAuth();

  const [itemDetail, setItemDetail] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  const [exists, setExists] = useState(false);
  const [idMongoose, setIdMongoose] = useState(null);

  const {
    addItemToMyList,
    getItemFromMyList,
    updateItemFromMyList,
    getAllItemsFromMyList,
    deleteItemFromMyList,
  } = useMyList();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Obtengo los detalles de la película o serie
    getItemDetail(id, type)
      .then((data) => {
        setItemDetail(data);
        setLoading(false);
      });

    // Compruebo si ya existe la pelicula o serie en la base de datos
    getItemFromMyList(id).then((data) => {
      setExists(data.ok);

      // Guardo su id de mongo para luego utilizarlo para hacer las operaciones de CRUD
      if (data.ok) {
        setIdMongoose(data.itemMyList[0]._id);
      }
    });

    // Compruebo si la pelicula o serie guardada en la base de datos pertenece al usuario actual
    if (!loading) {
      getAllItemsFromMyList({ userId: user?.id }).then((data) => {
        data.forEach((dataItem) => {
          if (dataItem.idItem === id) {
            setSelected(true);
            counter += 1;
          }
        });

        if (counter === 0) {
          setSelected(false);
        }
      });
    }
  }, [id, loading]);

  const handleSaveMyList = async () => {
    // Si la película o serie ya existe en la BD, se actualiza
    // el subdocumento de usuarios de la película o serie y se
    // añade el usuario actual
    if (exists) {
      updateItemFromMyList({ idItem: id, userId: user.id, idMongoose });
      setSelected(true);
    } else {
      addItemToMyList({
        idItem: id,
        posterPath: itemDetail.poster_path,
        type,
        userId: user.id,
      });
      setSelected(true);
    }

    // Si el botón está seleccionado quiere decir que está en la BD, por lo tanto,
    // se elimina el usuario actual de la colección de usuarios de la película o serie
    if (selected) {
      deleteItemFromMyList({ idItem: id, userId: user.id, idMongoose });
      setSelected(false);
    }
  };

  return {
    handleSaveMyList, selected, itemDetail, isLoading,
  };
}

export default useManipulateMyList;
