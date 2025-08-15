import React, { type JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AuthProvider, AuthContext } from './context/AuthContext';
import type { Role } from './types';

import { LoginPage } from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import CustomerPage from './pages/CustomerPage';
import InfoPage from './pages/components/InfoPage/InfoPage';
import InfoContent from './pages/components/InfoContent/InfoContent';

// map pentru redirect corect când cineva încearcă alt path decât cel al rolului
const HOME_BY_ROLE: Record<Role, string> = {
  Admin: '/admin',
  Worker: '/worker',
  Customer: '/customer',
};

// Rute publice (accesibile oricui)
const PublicRoute = ({ children }: { children: JSX.Element }) => children;

// Protecție pe rol: dacă nu e logat -> /login; dacă rolul nu permite ruta -> home-ul rolului
const RoleRoute = ({ allowed, children }: { allowed: Role[]; children: JSX.Element }) => {
  const { user } = React.useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  if (!allowed.includes(user.role)) {
    return <Navigate to={HOME_BY_ROLE[user.role]} replace />;
  }
  return children;
};

// Trimite utilizatorul pe home-ul rolului sau la login
const AutoHome = () => {
  const { user } = React.useContext(AuthContext);
  return user ? (
    <Navigate to={HOME_BY_ROLE[user.role]} replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => (
  <MantineProvider>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/info-page" element={<PublicRoute><InfoContent /></PublicRoute>} />
          {/* Exemplu de pagină publică viitoare: */}
          {/* <Route path="/help" element={<PublicRoute><HelpPage /></PublicRoute>} /> */}

          {/* Private pe rol */}
          <Route
            path="/admin"
            element={
              <RoleRoute allowed={['Admin']}>
                <AdminPage />
              </RoleRoute>
            }
          />

          <Route
            path="/worker"
            element={
              <RoleRoute allowed={['Worker']}>
                <InfoPage />
              </RoleRoute>
            }
          />

          <Route
            path="/customer"
            element={
              <RoleRoute allowed={['Customer']}>
                <CustomerPage />
              </RoleRoute>
            }
          />

          {/* Root + 404: mergem pe home-ul corect sau login */}
          <Route path="/" element={<AutoHome />} />
          <Route path="*" element={<AutoHome />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </MantineProvider>
);

export default App;