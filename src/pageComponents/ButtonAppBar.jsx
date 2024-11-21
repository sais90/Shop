import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const ButtonAppBar = (props) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant='h6'
            component='a'
            href='/'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            Logo
          </Typography>
          {props.appBarMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
