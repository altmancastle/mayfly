/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material';
import * as React from 'react';

export default function AccountDetails(): JSX.Element {
  return (
    <Container sx={{my: 4}} maxWidth="sm">
      <Typography sx={{mb: 4}} variant="h2" children="Account Details" />

      <Box component="form">
        <TextField
          name="displayName"
          label="Display Name"
          value={'test'}
          helperText={' '}
          InputLabelProps={{shrink: true}}
          fullWidth
          required
        />

        <TextField
          name="email"
          type="email"
          label="Email"
          value={''}
          helperText={' '}
          InputLabelProps={{shrink: true}}
          fullWidth
          required
        />

        <Button variant="contained" type="submit" children="Update Profile" />
      </Box>
    </Container>
  );
}

function useState() {}

function useHandleSubmit(input: Input, setState: SetState) {}

type Input = ReturnType<typeof useState>;
type SetState = ReturnType<typeof useState>;
