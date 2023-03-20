import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from '@mf/layout';
import {CssBaseline} from '@mui/material';
import {QueryClientProvider} from '@mf/layout';
import {router} from './app';
import {RecoilRoot} from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider>
        <ThemeProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
