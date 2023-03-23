import {Box, Container, Paper, Stack, Toolbar} from '@mui/material';
import * as React from 'react';
import {Outlet} from 'react-router-dom';
import {AppToolbar} from './components/AppToolbar.js';

/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
  return (
    <React.Fragment>
      <AppToolbar />
      <Toolbar />
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            width: ' 200px',
            height: '100%',
            background: '#aaa'
          }}
        >
          test
        </Box>
        <Box
          sx={{
            flex: '1'
          }}
        >
          <React.Suspense>
            <Outlet />
          </React.Suspense>
        </Box>
      </Stack>
    </React.Fragment>
  );
}
