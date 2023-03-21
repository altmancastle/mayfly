import React, {lazy} from 'react';
import {BaseLayout} from '@mf/layout';
import {RootError} from '@mf/layout';

const Login = lazy(() => import('../modules/auth/Login'));
const Privacy = lazy(() => import('../pages/legal/Privacy'));
const Terms = lazy(() => import('../pages/legal/Terms'));

export function PublicRoutes() {
  return [
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
    }
  ];
}
