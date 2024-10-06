import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ButtonAppBarPablic = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Logo
            </Typography>
          </Link>

          <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none', margin: 10 }}>
            <Typography component="div">
              SignIn
            </Typography>
          </Link>

          <Link to={'/registration'} style={{ color: 'inherit', textDecoration: 'none', margin: 10 }}>
            <Typography component="div">SignUp</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBarPablic;
