import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import { ThemeProvider } from '@emotion/react';
import theme from '../themes/myTheme';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
// import { setIsAuth } from '../utils/helpers/isAuthSlice';
// import { useDispatch } from 'react-redux';

const ButtonAppBarPrivate = () => {
  // const dispatch = useDispatch();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleMenu = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleLogaut = () => {
  //   localStorage.removeItem('access_token');
  //   dispatch(setIsAuth(false));
  // };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                Logo
              </Typography>
            </Link>

            <UserMenu />

            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to={'/dashboard'} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography component="div">Dashboard</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  component="buttom"
                  onClick={handleLogaut}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <Typography component="div">Logout</Typography>
                </Link>
              </MenuItem>
            </Menu> */}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default ButtonAppBarPrivate;
