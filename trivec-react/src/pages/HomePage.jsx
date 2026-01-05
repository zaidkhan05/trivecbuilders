import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import company from '../data/companyinfo.json';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

const highlights = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed in Georgia with rigorous jobsite safety standards.',
  },
  {
    title: 'Transparent Communication',
    description: 'Weekly progress updates and a single point of contact from start to finish.',
  },
  {
    title: 'Commercial & Residential',
    description: 'From tenant improvements to custom homes, we tailor each build to your goals.',
  },
];

const process = [
  {
    step: '01',
    title: 'Listen & Align',
    description: 'We capture your priorities, constraints, and budget to shape a clear scope.',
  },
  {
    step: '02',
    title: 'Plan & Price',
    description: 'Detailed estimates, permitting strategy, and schedule so you know what to expect.',
  },
  {
    step: '03',
    title: 'Build & Communicate',
    description: 'Transparent updates, quality checks, and site safety until handoff.',
  },
];

const pillars = [
  {
    title: 'Craftsmanship',
    description: 'We pair experienced crews with vetted trades to deliver clean, durable finishes.',
  },
  {
    title: 'Planning First',
    description: 'Clear scopes, realistic schedules, and proactive permitting keep projects moving.',
  },
  {
    title: 'Partnership',
    description: 'We collaborate closely with owners, architects, and inspectors to solve issues fast.',
  },
];

const heroImage = '/homebg.png';
const phoneLink = `tel:${company.phone.replace(/[^\d+]/g, '')}`;
const emailLink = `mailto:${company.email}`;

function HomePage() {
  const featuredProjects = projectsData.projects.slice(0, 3);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) {
        window.requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [location]);

  return (
    <>
      <Hero
        title={company.tagline}
        subtitle="Residential & commercial construction experts in Georgia."
        ctaLabel="Request a Quote"
        ctaTo="#contact"
        bgImage={heroImage}
        secondaryCta={
          <Button component={RouterLink} to="/projects" variant="outlined" color="inherit">
            View Projects
          </Button>
        }
      />

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.default">
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={6}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h4" fontWeight={800} color="text.primary">
                What We Offer
              </Typography>
              <Typography color="text.secondary">
                Comprehensive construction services with transparent communication and meticulous execution.
              </Typography>
            </Stack>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.paper">
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h4" fontWeight={800} color="text.primary">
                  Who we are
                </Typography>
                <Typography color="text.secondary">
                  {company.name} delivers residential and commercial projects across Georgia with a
                  focus on schedule certainty and clean execution. We combine careful planning with
                  hands-on site management so you always know the next milestone and the path to get
                  there.
                </Typography>
                <Typography color="text.secondary">
                  Whether you are building ground-up, renovating, or improving tenant space, our
                  team leads coordination with trades, inspectors, and stakeholders so you can stay
                  focused on your business.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {highlights.map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                      <Stack spacing={1}>
                        <Typography variant="h6" fontWeight={700} color="text.primary">
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.default">
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={3} textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight={800} color="text.primary">
              How we work
            </Typography>
            <Typography color="text.secondary">
              A simple process that keeps decisions clear and progress visible from day one.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {process.map((phase) => (
              <Grid item xs={12} md={4} key={phase.title}>
                <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Stack spacing={1}>
                    <Typography color="secondary" fontWeight={700}>
                      {phase.step}
                    </Typography>
                    <Typography variant="h6" fontWeight={700} color="text.primary">
                      {phase.title}
                    </Typography>
                    <Typography color="text.secondary">{phase.description}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.paper">
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={3} textAlign="center">
            <Typography variant="h4" fontWeight={800} color="text.primary">
              What we stand for
            </Typography>
            <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {pillars.map((pillar) => (
                <Grid item xs={12} sm={4} key={pillar.title}>
                  <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                    <Stack spacing={1}>
                      <Typography variant="h6" fontWeight={700} color="text.primary">
                        {pillar.title}
                      </Typography>
                      <Typography color="text.secondary">{pillar.description}</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="primary.main" color="primary.contrastText">
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={3} textAlign="center">
            <Typography variant="h4" fontWeight={800}>
              Featured Projects
            </Typography>
            <Typography color="primary.contrastText" sx={{ opacity: 0.9 }}>
              A snapshot of our recent commercial and residential work.
            </Typography>
            <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {featuredProjects.map((project) => (
                <Grid item xs={12} md={4} key={project.id}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
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

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.paper" id="contact">
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Grid  spacing={4} alignItems="stretch">
            
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Stack spacing={2}>
                  <Typography variant="h4" fontWeight={800} color="text.primary">
                    Let’s build your vision
                  </Typography>
                  <Typography color="text.secondary">
                    Contact us for a consultation or quote — we are here to help with your next project.
                  </Typography>
                  <Stack spacing={1.5}>
                    <Typography color="text.primary" fontWeight={700}>
                      Phone
                    </Typography>
                    <Button component="a" href={phoneLink} color="secondary" variant="outlined">
                      {company.phone}
                    </Button>
                  </Stack>
                  <Stack spacing={1.5}>
                    <Typography color="text.primary" fontWeight={700}>
                      Email
                    </Typography>
                    <Button component="a" href={emailLink} color="secondary" variant="outlined">
                      {company.email}
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
