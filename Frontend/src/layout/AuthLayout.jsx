import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return user
    ? (
      <>
        <Header position="fixed" />
        <Outlet />
        <Footer />
      </>
    ) : <Navigate to="/" />;
}

export default AuthLayout;
