import React from 'react';
import {lazy} from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import {AppLayout} from '../layout/AppLayout';
import {BaseLayout} from '../layout/BaseLayout';
import {RootError} from '../layout/RootError';

const Login = lazy(() => import('./auth/Login'));
const Privacy = lazy(() => import('./legal/Privacy'));
const Terms = lazy(() => import('./legal/Terms'));

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const SettingsLayout = lazy(() => import('./settings/SettingsLayout'));
const AccountDetails = lazy(() => import('./settings/AccountDetails'));

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      {path: 'login', element: <Login mode="login" />},
      {path: 'signup', element: <Login mode="signup" />},
      {path: 'privacy', element: <Privacy />},
      {path: 'terms', element: <Terms />}
    ]
  },
  {
    path: '',
    element: <AppLayout />,
    errorElement: <RootError />,
    children: [
      {index: true, element: <Navigate to="/dashboard" replace />},
      {path: 'dashboard', element: <Dashboard />},
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          {index: true, element: <Navigate to="/settings/account" />},
          {path: 'account', element: <AccountDetails />}
        ]
      }
    ]
  }
]);

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
