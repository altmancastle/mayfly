import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './routing/Routes';

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
