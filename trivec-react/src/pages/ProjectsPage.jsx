import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

function ProjectsPage() {
  const commercial = projectsData.projects.filter((p) => p.type === 'Commercial');
  const residential = projectsData.projects.filter((p) => p.type === 'Residential');

  const heroImage = '/motwalph.png';
  const contactLink = '/#contact';

  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Explore our commercial and residential work."
        ctaLabel="Discuss your project"
        ctaTo={contactLink}
        bgImage={heroImage}
      />

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={6}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h4" fontWeight={800} color="text.primary">
                Commercial Projects
              </Typography>
              <Typography color="text.secondary">
                Spaces crafted to elevate customer experiences and operational efficiency.
              </Typography>
            </Stack>
            <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {commercial.map((project) => (
                <Grid item xs={12} md={4} key={project.id}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
            </Grid>

            <Stack spacing={2} textAlign="center">
              <Typography variant="h4" fontWeight={800} color="text.primary">
                Residential Projects
              </Typography>
              <Typography color="text.secondary">
                Homes renewed with thoughtful design and high-quality finishes.
              </Typography>
            </Stack>
            <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {residential.map((project) => (
                <Grid item xs={12} md={4} key={project.id}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default ProjectsPage;
