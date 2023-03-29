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
        fontSize: '3.5rem',
        fontWeight: 500
      }}
      variant="h1"
      {...other}
    >
      <svg
        style={{width: '1em', height: '0.36em'}}
        width="336"
        height="121"
        viewBox="0 0 336 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 120.5L24 0H69L45 120.5H0Z" fill="#EE7874" />
        <path d="M123 120.5L147 0H192L168 120.5H123Z" fill="#9D8AC4" />
        <path d="M306.5 54H205.215L199.3 84H299.5L306.5 54Z" fill="#9D8AC4" />
        <path
          d="M335.5 0H216L209.6 32H326.5L335.5 0Z"
          fill="#F09C15"
          fill-opacity="0.6"
        />
        <path
          d="M192 120.5L216 0H261L237 120.5H192Z"
          fill="#10B2CD"
          fill-opacity="0.6"
        />
        <path
          d="M147 0L73 67L80 74H115.5L189 15L192 0H147Z"
          fill="#F29B0E"
          fill-opacity="0.6"
        />
        <path
          d="M123 68L69 0H24L21 15.5L80 74H115.5L123 68Z"
          fill="#1A9AAF"
          fill-opacity="0.6"
        />
      </svg>
    </Typography>
  );
}
