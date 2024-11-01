import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { setIsAuth } from '../utils/helpers/isAuthSlice';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const UserMenu = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogaut = () => {
        localStorage.removeItem('access_token');
        dispatch(setIsAuth(false));
    };

    return (
        <Toolbar>
            <IconButton
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
            </Menu>
        </Toolbar>

    )
}

export default UserMenu;