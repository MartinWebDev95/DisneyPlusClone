/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const authContext = createContext();

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Login con Google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logout = () => signOut(auth);

  // Obtener los datos del usuario logeado
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ loginWithGoogle, logout, user }}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };
