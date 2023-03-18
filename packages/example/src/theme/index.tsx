import React, {useContext} from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  type PaletteMode
} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import palettes from './palettes';
import {components} from './components';
import * as typography from './typography';

const {palette} = createTheme({palette: palettes.light});
let theme = createTheme(
  {
    palette,
    typography: typography.options,
    components: components(palette)
  },
  {
    typography: typography.overrides
  }
);

export function ThemeProvider(props: {children: React.ReactNode}): JSX.Element {
  return <MuiThemeProvider theme={theme} {...props} />;
}
