import React from 'react';
import {Button} from '@mui/material';
import {useTheme} from '@mui/material/styles';

export function ThemeButton(props: ThemeButtonProps): JSX.Element {
  const {...other} = props;
  // const toggleTheme = useToggleTheme('light');
  // const theme = useTheme();

  return <Button>test</Button>;
}

export type ThemeButtonProps = Omit<any, 'children'>;
