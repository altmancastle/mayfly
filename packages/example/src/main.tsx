import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mf/layout';
import {CssBaseline} from '@mui/material';
import {QueryClientProvider} from '@mf/layout';
import App from './app/App';
import {RecoilRoot} from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider>
        <ThemeProvider>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
