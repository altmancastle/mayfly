import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from './theme';
import {CssBaseline} from '@mui/material';
import QueryClientProvider from './queries';
import App from './App';
import './index.css';
import {router} from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider>
      <ThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
    <App />
  </React.StrictMode>
);
