import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import { Link } from 'react-router-dom';

const ButtonAppBarPablic = () => {
  return (
    <Box>
      <AppBar position="static"
      // sx={{
      //   height: '200px'
      // }}
      >
        <Toolbar>
          {/* <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Logo
            </Typography>
          </Link> */}

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
          {/* <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none', margin: 10 }}>
            <Typography component="div">
              SignIn
            </Typography>
          </Link> */}

          <Typography
            variant='h6'
            component='a'
            href='/login'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              margin: '10px'
            }}
          >
            SignIn
          </Typography>

          {/* <Link to={'/registration'} style={{ color: 'inherit', textDecoration: 'none', margin: 10 }}>
            <Typography component="div">SignUp</Typography>
          </Link> */}

          <Typography
            variant='h6'
            component='a'
            href='/registration'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              margin: '10px'
            }}
          >
            SignUp
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBarPablic;
