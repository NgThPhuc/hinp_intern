import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormLogin from '../pages/FormLogin';
import FormRegister from '../pages/FormRegister';
import InstallationPage from '../pages/InstallationPage';

export function AppRouter() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />

        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Navigate to="installation" />} />
          <Route path="installation" element={<InstallationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}