import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../themes/myTheme';
import UserMenu from './UserMenu';
import ButtonAppBar from './ButtonAppBar';

const ButtonAppBarPrivate = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar appBarMenu={<UserMenu />} />
    </ThemeProvider>
  );
};

export default ButtonAppBarPrivate;
