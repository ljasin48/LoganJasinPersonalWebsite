import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar>
          {navItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              component={NavLink}
              to={item.path}
              sx={{
                '&.active': { textDecoration: 'underline' }, // Highlight active link
              }}
            >
              {item.label}
            </Button>
          ))}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
            Logan Jasin
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
