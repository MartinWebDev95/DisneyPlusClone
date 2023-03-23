import { createContext, useMemo, useContext } from 'react';

const myListContext = createContext();

const useMyList = () => {
  const context = useContext(myListContext);
  return context;
};

function MyListProvider({ children }) {
  const addItemToMyList = async ({
    idItem, posterPath, type, userId,
  }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/my-list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          idItem,
          posterPath,
          type,
          userId,
        }),
      });

      await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const getItemFromMyList = async (idItem) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/my-list/${idItem}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      });

      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const getAllItemsFromMyList = async ({ userId }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/my-list/all/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      });

      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const updateItemFromMyList = async ({ idItem, userId, idMongoose }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/my-list/${idItem}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          userId,
          idMongoose,
        }),
      });

      await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const deleteItemFromMyList = async ({ idItem, userId, idMongoose }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/my-list/${idItem}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          userId,
          idMongoose,
        }),
      });

      await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const value = useMemo(() => ({
    addItemToMyList,
    getAllItemsFromMyList,
    getItemFromMyList,
    updateItemFromMyList,
    deleteItemFromMyList,
  }), []);

  return (
    <myListContext.Provider value={value}>
      {children}
    </myListContext.Provider>
  );
}

export { MyListProvider, useMyList };
