import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import company from '../data/companyinfo.json';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

function HomePage() {
  const featuredProjects = projectsData.projects.slice(0, 3);

  return (
    <>
      <Hero
        title={company.tagline}
        subtitle="Residential & commercial construction experts in Georgia."
        ctaLabel="Request a Quote"
        ctaTo="/contact"
        secondaryCta={
          <Button component={RouterLink} to="/projects" variant="outlined" color="inherit">
            View Projects
          </Button>
        }
      />

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.default">
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h4" fontWeight={800} color="text.primary">
                What We Offer
              </Typography>
              <Typography color="text.secondary">
                Comprehensive construction services with transparent communication and meticulous execution.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {servicesData.services.map((service) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <ServiceCard
                    title={service.title}
                    description={service.shortDescription}
                    icon={service.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="primary.main" color="primary.contrastText">
        <Container maxWidth="lg">
          <Stack spacing={3} textAlign="center">
            <Typography variant="h4" fontWeight={800}>
              Featured Projects
            </Typography>
            <Typography color="primary.contrastText" sx={{ opacity: 0.9 }}>
              A snapshot of our recent commercial and residential work.
            </Typography>
            <Grid container spacing={3}>
              {featuredProjects.map((project) => (
                <Grid item xs={12} md={4} key={project.id}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
            <Button
              component={RouterLink}
              to="/projects"
              variant="outlined"
              color="inherit"
              sx={{ alignSelf: 'center' }}
            >
              See all projects
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.paper">
        <Container maxWidth="sm">
          <Stack spacing={2} textAlign="center">
            <Typography variant="h4" fontWeight={800} color="text.primary">
              Let’s build your vision
            </Typography>
            <Typography color="text.secondary">
              Contact us for a consultation or quote — we are here to help with your next project.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button component={RouterLink} to="/contact" variant="contained" color="secondary">
                Contact Us
              </Button>
              <Button component={RouterLink} to="/services" variant="outlined" color="primary">
                Explore services
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
