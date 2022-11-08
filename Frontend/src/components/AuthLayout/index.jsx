import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useAuth } from '../../context/AuthContext';

function AuthLayout() {
  const { user, loading } = useAuth();

  return (
    <>
      <Header position="fixed" />
      <Outlet />
      <Footer />
    </>
  );
}

export default AuthLayout;
