import React from 'react';
import {Typography, TypographyProps} from '@mui/material';

export function Logo(props: TypographyProps): JSX.Element {
  const {sx, ...other} = props;

  return (
    <Typography
      sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 500
      }}
      variant="h1"
      {...other}
    >
      <svg
        style={{width: '1em', height: '1em'}}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.09619 4.67216C8.24141 -0.586849 8.70984 -1.5951 12.0387 2.61429C15.3676 6.82367 18.1942 12.3857 13.5891 11.1489C6.77807 9.31972 -2.54777 -4.93125 0.646792 9.55008C3.84135 24.0314 5.84637 10.4115 7.09619 4.67216Z"
          fill="currentColor"
        />
      </svg>
    </Typography>
  );
}
