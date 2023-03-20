import {Button, ButtonProps} from '@mui/material';
import * as React from 'react';

export function LoginButton(props: LoginButtonProps): JSX.Element {
  const {onClick, ...other} = props;
  const handleClick = () => {};

  return (
    <Button
      variant="outlined"
      size="large"
      href="/login"
      fullWidth
      {...other}
      onClick={handleClick}
    >
      <span style={{flexGrow: 1, textAlign: 'center'}}>这是测试</span>
    </Button>
  );
}

export type LoginButtonProps = ButtonProps<'a'>;
