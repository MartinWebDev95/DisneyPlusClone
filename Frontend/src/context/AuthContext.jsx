import {
  useState, createContext, useMemo, useContext, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase';
import getInfoCurrentUser from '../services/getInfoCurrentUser';

const authContext = createContext();

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    // Receive a notification every time an auth event happens.
    supabase.auth.onAuthStateChange((event, session) => {
      // If session is null that means the user is not logged so redirect the user to login page
      if (!session) {
        navigate('/');

        setCurrentUser(null);

        setLoading(false);
      } else {
        navigate('/home');

        getInfoCurrentUser()
          .then((infoUser) => {
            setCurrentUser(infoUser);
          }).finally(() => {
            setLoading(false);
          });
      }
    });
  }, []);

  // Sign in with Google OAuth
  const handleLoginWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const value = useMemo(() => ({
    currentUser, setCurrentUser, loading, setLoading, handleLoginWithGoogle, handleLogout,
  }), [currentUser, loading]);

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };
