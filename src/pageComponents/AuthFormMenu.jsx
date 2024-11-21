import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AuthFormMenu = () => {
    return (
        <Toolbar>
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

    )
}

export default AuthFormMenu;