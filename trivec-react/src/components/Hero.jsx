import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';

function Hero({ title, subtitle, ctaLabel, ctaTo, secondaryCta, bgImage }) {
  const backgroundStyles = bgImage
    ? {
        backgroundImage: `linear-gradient(rgba(18, 24, 33, 0.72), rgba(18, 24, 33, 0.72)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }
    : { bgcolor: 'primary.main' };

  return (
    <Box
      sx={{
        color: 'primary.contrastText',
        py: { xs: 8, md: 12 },
        minHeight: { xs: 320, md: 420 },
        position: 'relative',
        overflow: 'hidden',
        ...backgroundStyles,
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4 } }}>
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
              (() => {
                const isExternal = ctaTo && (ctaTo.startsWith('http') || ctaTo.startsWith('tel:') || ctaTo.startsWith('mailto:') || ctaTo.startsWith('#'));
                const buttonProps = isExternal
                  ? { component: 'a', href: ctaTo }
                  : { component: RouterLink, to: ctaTo || '/' };

                return (
              <Button
                  {...buttonProps}
                variant="contained"
                color="secondary"
                size="large"
              >
                {ctaLabel}
              </Button>
                );
              })()
            )}
            {secondaryCta}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
