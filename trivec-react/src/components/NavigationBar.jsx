import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import company from '../data/companyinfo.json';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen((prev) => !prev);

  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', height: 100 }}>
        <Button
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{ pl: 0, textTransform: 'none' }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src="/logoimg.png"
              alt={`${company.name} logo`}
              sx={{
                height: 70,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <Typography variant="h6" fontWeight={700} letterSpacing={1.75} fontSize={35}  >
              {company.name}
            </Typography>
          </Stack>
        </Button>

        <Box sx={{ flex: 1 }} />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          {links.map((link) => (
            <Button
              key={link.to}
              component={RouterLink}
              to={link.to}
              color={location.pathname === link.to ? 'secondary' : 'inherit'}
            >
              <Typography variant="h4" fontWeight={500} letterSpacing={1} fontSize={20}>
                {link.label}
              </Typography>
            </Button>
          ))}
        </Stack>

        <IconButton
          onClick={toggle}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'inherit' }}
          aria-label="menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={toggle} sx={{ display: { md: 'none' } }}>
        <Box sx={{ width: 260, p: 3 }}>
          <Stack spacing={2}>
            {links.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                onClick={toggle}
                color={location.pathname === link.to ? 'secondary' : 'primary'}
                variant={location.pathname === link.to ? 'contained' : 'text'}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavigationBar;
