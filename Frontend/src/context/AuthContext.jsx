import {
  useState, createContext, useMemo, useContext, useEffect,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import supabase from '../../supabase';
import getInfoCurrentUser from '../services/getInfoCurrentUser';

const authContext = createContext();

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Recibe una notificación cada vez que ocurre un evento auth
    supabase.auth.onAuthStateChange((event, session) => {
      // Si la session es null significa que el usuario no está logueado, por lo tanto,
      // se redirecciona al usuario a la página de login
      if (!session) {
        navigate('/');

        setCurrentUser(null);

        setLoading(false);
      }

      // Si existe una sesión activa no se permite al usuario volver a la
      // página de inicio de sesión
      if (session && location.pathname === '/') {
        navigate('/home');
      }

      // Se obtiene la información del usuario si existe una sesión y
      // ocurre alguno de los dos eventos
      if (session && (event === 'INITIAL_SESSION' || event === 'SIGNED_IN')) {
        getInfoCurrentUser()
          .then((infoUser) => {
            setCurrentUser(infoUser);
          }).finally(() => {
            setLoading(false);
          });
      }
    });
  }, []);

  // Iniciar sesión con Google OAuth
  const handleLoginWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: import.meta.env.VITE_REDIRECT_TO,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Iniciar sesión con una cuenta demo
  const handleLoginWithDemoUser = async () => {
    try {
      await supabase.auth.signInWithPassword({
        email: import.meta.env.VITE_DEMO_EMAIL,
        password: import.meta.env.VITE_DEMO_PASSWORD,
      });

      // Redireccionar al usuario hacia home
      navigate('/home');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Cerrar sesión
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const value = useMemo(() => ({
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    handleLoginWithGoogle,
    handleLoginWithDemoUser,
    handleLogout,
  }), [currentUser, loading]);

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };
