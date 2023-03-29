import React from 'react';
import {Button} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {useToggleTheme} from '../../theme';

export function ThemeButton(props: ThemeButtonProps): JSX.Element {
  const {...other} = props;
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Button variant="contained" onClick={toggleTheme}>
      {theme.palette.mode}
    </Button>
  );
}

export type ThemeButtonProps = Omit<any, 'children'>;
