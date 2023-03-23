import React, {Suspense, lazy} from 'react';
import {Navigate} from 'react-router-dom';
import {AppLayout} from '@mf/layout';
import {RootError} from '@mf/layout';
import LayoutDrawer from '@mf/layout/layout/LayoutDrawer';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));

const SettingsLayout = lazy(() => import('../modules/settings/SettingsLayout'));
const AccountDetails = lazy(() => import('../modules/settings/AccountDetails'));

export function PrivateRoutes() {
  return [
    {
      path: '',
      element: <LayoutDrawer />,
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
  ];
}
