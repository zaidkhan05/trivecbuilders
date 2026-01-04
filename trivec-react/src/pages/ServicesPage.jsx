import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import servicesData from '../data/services.json';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions for residential and commercial projects."
        ctaLabel="Get a Quote"
        ctaTo="/contact"
      />

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg">
          <Stack spacing={3} textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight={800} color="text.primary">
              What We Offer
            </Typography>
            <Typography color="text.secondary">
              From concept to completion, we manage every detail with clarity and care.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {servicesData.services.map((service) => (
              <Grid item xs={12} md={6} key={service.title}>
                <ServiceCard
                  title={service.title}
                  description={service.longDescription}
                  icon={service.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ServicesPage;
