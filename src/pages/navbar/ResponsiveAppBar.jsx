import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pagina) => {
    setAnchorElNav(null);
  };

  return (
    <>
    <AppBar position="absolute" sx={{bgcolor:'darkblue'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TECSoftware
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={'Facturas'} onClick={handleCloseNavMenu} component={Link} to='/bills'>
                  <Typography textAlign="center">Facturas</Typography>
                </MenuItem>
                <MenuItem key={'Productos'} onClick={handleCloseNavMenu} component={Link} to='/products'>
                  <Typography textAlign="center">Productos</Typography>
                </MenuItem>
                <MenuItem key={'Informes'} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">Informes</Typography>
                </MenuItem>
                <MenuItem key={'Clientes'} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Clientes</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TECSoftware
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to={'/bills'}><Button key={'Facturas'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Facturas</Button></Link>
                <Link to={'products'}><Button key={'Productos'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Productos</Button></Link>
                <Button key={'Informes'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Informes</Button>
                <Button key={'Clientes'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Clientes</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton>   <Avatar />   </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  );
}
export default ResponsiveAppBar;