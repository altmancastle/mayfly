import React, {useEffect} from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import {useRecoilState} from 'recoil';
import {AppConfigAtom} from '../../../core/config';
import {ThemeName} from '@mf/layout';

export default function Home(): JSX.Element {
  console.log('test');

  const [test, setTest] = useRecoilState(AppConfigAtom);
  const [theme, setTheme] = useRecoilState(ThemeName);

  const handleClick = () => {
    setTest({});
    setTheme('dark');
  };

  return (
    <Container sx={{py: '20vh'}} maxWidth="sm">
      <Typography sx={{mb: 2}} variant="h1" align="center">
        Welcome to React Starter Kit!
      </Typography>

      <Typography sx={{mb: 4}} variant="h3" align="center">
        The web&apos;s most popular Jamstack React template.
      </Typography>

      <Button
        onClick={handleClick}
        variant="outlined"
        size="large"
        children={theme}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gridGap: '1rem'
        }}
      >
        <Button
          variant="outlined"
          size="large"
          href={`/api`}
          children="Explorer API"
        />
        <Button
          variant="outlined"
          size="large"
          href="https://github.com/kriasoft/react-starter-kit"
          children="View on GitHub"
        />
      </Box>
    </Container>
  );
}
