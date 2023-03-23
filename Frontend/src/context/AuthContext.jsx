import {
  useState, createContext, useMemo, useContext, useEffect, useRef,
} from 'react';

const authContext = createContext();

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAuth = useRef(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login/success`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        });

        if (response.status !== 200) {
          throw new Error('Authentication has been failed');
        }

        const data = await response.json();

        if (data.success) {
          setUser(data.user);
        }
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const handleLogout = () => {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, '_self');
    setUser(null);
  };

  const handleLogin = () => {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, '_self');
  };

  const value = useMemo(() => ({
    user, setUser, loading, setLoading, handleLogout, handleLogin,
  }), [user, loading]);

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };
