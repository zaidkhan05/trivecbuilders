import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';

function Hero({ title, subtitle, ctaLabel, ctaTo, secondaryCta }) {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} textAlign="center" alignItems="center">
          <Typography variant="h3" fontWeight={800}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h6" color="primary.contrastText" sx={{ opacity: 0.9 }}>
              {subtitle}
            </Typography>
          )}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            {ctaLabel && (
              <Button
                component={RouterLink}
                to={ctaTo || '/contact'}
                variant="contained"
                color="secondary"
                size="large"
              >
                {ctaLabel}
              </Button>
            )}
            {secondaryCta}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
