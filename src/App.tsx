import React from 'react';

import logo from './images/logo-aikido-union-linz.jpg';
import picture1 from './images/aikido_picture1.jpg';
import picture2 from './images/aikido_picture2.jpg';
import picture3 from './images/aikido_picture3.jpg';
import aikikaiLogo from './images/aikikai_logo1.png';
import aikidoText from './images/aikido_clipart2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
import { Carousel } from 'react-responsive-carousel';

const theme = createTheme({
  typography: {

  }
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
            <Typography
              variant="h5"
              noWrap
              className='headline'
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}>
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
        <Container disableGutters>
          <Grid2 container columns={12} spacing={1}>
            <Grid2 size={8}>
              <Box marginTop={2}>
                <Carousel
                  showStatus={false}
                  autoPlay={true}
                  emulateTouch={true}
                  infiniteLoop={true}
                  showArrows={false}
                  swipeable={true}>
                  <Box
                    component="img"
                    alt="Aikido Bild 1"
                    src={picture1}
                  />
                  <Box
                    component="img"
                    alt="Aikido Bild 2"
                    src={picture2}
                  />
                  <Box
                    component="img"
                    alt="Aikido Bild 3"
                    src={picture3}
                  />
                </Carousel>
              </Box>
            </Grid2>
            <Grid2 size={4} textAlign={'end'} className="aikido-text">
              <Box marginTop={2}
                component="img"
                alt="Aikdo text"
                src={aikidoText}
              />
            </Grid2>
            <Grid2 size={12}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                Aikido authentisch
              </Typography>
            </Grid2>
            <Grid2 size={12}>
              <ul>
                <li><Link>Was ist Aikido?</Link></li>

              </ul>
            </Grid2>
            <Grid2 size={12} className="training-heading">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                Training
              </Typography>
            </Grid2>
            <Grid2 size={8} className="training-body">
              <ul>
                <li><Link>Erwachsene</Link></li>
                <li><Link>Kinder</Link></li>
                <li><Link>Etikette</Link></li>
                <li><Link>Glossar</Link></li>
              </ul>
            </Grid2>
            <Grid2 size={4} textAlign={'end'} className="aikikai-logo">
              <Box
                width={'100px'}
                height={'100px'}
                component="img"
                alt="Aikikai Logo"
                src={aikikaiLogo}
              />
            </Grid2>
            <Grid2 size={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'left' }}>
                  Über uns
                </Typography>
                <ul>
                  <li><Link>Geschichte der Aikido Union Linz</Link></li>
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
