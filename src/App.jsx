import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Proveedor from "./pages/Proveedor";
import Usuarios from "./pages/Usuarios";
import Logout from "./pages/Logout";

// Material UI imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar"; 

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(124, 220, 210)',
    },  
    secondary: {
      main: '#dc004e',
    },
    activeOption: { 
      main:'rgb(91, 201, 178)', // un naranjita, por ejemplo
    },
  },
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
         
        <Navbar toggleDrawer={toggleDrawer} />
          
          <Container component="main" sx={{ flexGrow: 1, py: 10}}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Routes>
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/proveedor" element={<Proveedor />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" element={
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                      Bienvenido al panel de administración
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Selecciona una opción del menú para comenzar
                    </Typography>
                  </Box>
                } />
              </Routes>
            </Paper>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;