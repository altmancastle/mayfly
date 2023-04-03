import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mf/layout';
import {CssBaseline} from '@mui/material';
import {QueryClientProvider} from '@mf/layout';
import App from './app/App';
import {RecoilRoot} from 'recoil';
import * as _mock from './setup';
// Axios
import axios from 'axios';

_mock.mockAxios(axios);
_mock.setupAxios(axios);

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
