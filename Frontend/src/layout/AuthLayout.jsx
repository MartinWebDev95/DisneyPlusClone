import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

function AuthLayout() {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header position="fixed" />
      <Outlet />
      <Footer />
    </>
  );
}

export default AuthLayout;
