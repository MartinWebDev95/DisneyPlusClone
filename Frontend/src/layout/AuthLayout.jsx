import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

function AuthLayout({ children }) {
  const { user, loading } = useAuth();

  console.log({ user, loading });

  if (loading) {
    return <Spinner />;
  }

  return user
    ? (
      <>
        <Header position="fixed" />
        <Outlet />
        {children}
        <Footer />
      </>
    ) : <Navigate to="/" />;
}

export default AuthLayout;
