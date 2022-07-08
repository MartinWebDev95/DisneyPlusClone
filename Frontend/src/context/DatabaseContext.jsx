/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState,
} from 'react';
import {
  collection, doc, deleteDoc, setDoc, getDocs, getDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const dbContext = createContext();

const useDB = () => {
  const context = useContext(dbContext);
  return context;
};

function DatabaseProvider({ children }) {
  const [allData, setAllData] = useState([]);
  const [oneData, setOneData] = useState(false);

  // Guardar una película o serie en la BD
  const saveData = async (id, image, type) => {
    await setDoc(doc(db, 'mylist', `${id}`), { id, poster_path: image, type });
  };

  // Eliminar una serie o película en específico de la BD
  const removeData = async (id) => {
    await deleteDoc(doc(db, 'mylist', `${id}`));
  };

  // Obtener todas las series y películas de la BD
  const readAllData = async () => {
    const query = await getDocs(collection(db, 'mylist'));
    setAllData([]);
    query.forEach((item) => {
      setAllData((oldItem) => [...oldItem, item.data()]);
    });
  };

  // Obtener una película o serie en específico de la BD
  const readOneData = async (id) => {
    const docRef = doc(db, 'mylist', `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setOneData(true);
    } else {
      setOneData(false);
    }
  };

  const value = React.useMemo(() => ({
    saveData, removeData, readAllData, allData, readOneData, oneData,
  }), [readAllData, readOneData, oneData]);

  return (
    <dbContext.Provider value={value}>
      {children}
    </dbContext.Provider>
  );
}

export { DatabaseProvider, useDB };
