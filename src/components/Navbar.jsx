// components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';

const menuItems = [
  { text: 'Clientes', path: '/clientes', icon: <PeopleIcon /> },
  { text: 'Proveedor', path: '/proveedor', icon: <LocalShippingIcon /> },
  { text: 'Usuarios', path: '/usuarios', icon: <PersonIcon /> },
];

const Navbar = ({ toggleDrawer }) => {
  const location = useLocation(); // para conocer la ruta actual

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box 
            component="img"
            src="src/assets/logo.jpg"
            alt="Logo"
            sx={{ height: 40, width: 40, mr: 1, backgroundColor: 'white', p: 0.5, borderRadius: '50%' }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Panel Administrativo Web
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item) => (
            <Button 
              key={item.text}
              component={Link} 
              to={item.path} 
              color={location.pathname === item.path ? "activeOption" : "inherit"} 
              variant={location.pathname === item.path ? "contained" : "text"}  // 👈 además cambia el estilo
              startIcon={item.icon}
              sx={{ mx: 0.5 }}
            >
              {item.text}
            </Button>
          ))}
          <Button 
            component={Link} 
            to="/logout" 
            color="error" 
            variant="contained" 
            startIcon={<LogoutIcon />}
            sx={{ ml: 1 }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
