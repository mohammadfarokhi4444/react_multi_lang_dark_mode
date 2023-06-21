import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useUserState } from '../context/UserContext';

function RouterGuard() {
  const { isAuthenticated } = useUserState();
  return isAuthenticated ? <Layout /> : <Navigate replace to="/login" />;
}

export default RouterGuard;