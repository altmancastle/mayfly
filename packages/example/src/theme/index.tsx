import React, {useContext} from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  type PaletteMode
} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import palettes from './palettes';
import {components} from './components';
import * as typography from './typography';

const themeNameKey = 'ThemeName';

function generateTheme(name: PaletteMode) {
  const {palette} = createTheme({palette: palettes[name]});
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
  return theme;
}

/**
 * Switches between "light" and "dark" themes.
 */
export function useToggleTheme(name: PaletteMode) {
  return generateTheme(name);
}
const themeContext = {generateTheme, theme: palettes.dark};

const ThemeContext = React.createContext(themeContext);

export function ThemeProvider(props: {children: React.ReactNode}): JSX.Element {
  return <MuiThemeProvider theme={generateTheme('dark')} {...props} />;
}
