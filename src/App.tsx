import React from 'react';

import logo from './images/logo-aikido-union-linz.jpg';
import  picture1 from './images/aikido_picture1.jpg'

import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Article, AssuredWorkload } from '@mui/icons-material';

const theme = createTheme({

});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Container className='page-container'>
        <AppBar position="static" color="transparent">
            <Toolbar color="palette.primary.light">
              <Button color="inherit">
                <Box
                  component="img"
                  alt="Logo"
                  src={logo}
                  maxHeight={56}
                  maxWidth={56}
                />
              </Button>
              <Typography variant="h5" noWrap className='headline' component="div" sx={{ flexGrow: 1, alignSelf: 'center' }}>
    
                Aikido Union Linz
              </Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
        </AppBar>
        <Container>
          <Grid2 container columns={12} spacing={2}>
            <Grid2 size={12}>
              <Box
                marginTop={4}
                marginBottom={2}
                maxWidth={'60%'}
                component="img"
                alt="Aikido Bild"
                src={picture1}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                  Wir trainieren Aikido
                </Typography>
                <ul>
                  <li><Link>Was ist Aikido?</Link></li>
                  <li><Link>Glossar</Link></li>
                </ul>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                </Typography>
              </Box>

            </Grid2>
            <Grid2 size={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                  Training
                </Typography>
                <ul>
                  <li><Link>Erstes Training</Link></li>
                  <li><Link>Erwachsene</Link></li>
                  <li><Link>Kinder</Link></li>
                  <li><Link>Etikette</Link></li>
                </ul></Box>
            </Grid2>
            <Grid2 size={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                  Über uns
                </Typography>
                <ul>
                  <li><Link>Kurze Geschichte der A.U.L. mit Erweiterung A.B. Wels, A. Walding</Link></li>
                  <li><Link>Trainer und Vorstand</Link></li>
                  <li><Link>Mitgliedschaft</Link></li>
                  <li><Link>Kontakt</Link></li>
                </ul>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Datenschutz" icon={<AssuredWorkload />} />
          <BottomNavigationAction label="Impressum" icon={<Article />} />
          <BottomNavigationAction label="Dojos" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Container>
    </ThemeProvider>
  );
}

export default App;
