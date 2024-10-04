import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import navbarRoutes from '../routes/navbarRoutes';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DrawerApp = () => {
  const location = useLocation();

  return (
    // <Drawer open={true}>

    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navbarRoutes.map((route, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={route.path}
              selected={route.path === location.pathname}
            >
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    // </Drawer>
  );
};

export default DrawerApp;
