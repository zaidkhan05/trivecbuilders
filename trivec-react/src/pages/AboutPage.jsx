import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Hero from '../components/Hero';
import company from '../data/companyinfo.json';

const owner = {
  name: 'Ali Mohammed',
  role: 'Owner',
  bio: 'Founded Trivec Builders to deliver transparent, schedule-driven projects across Georgia.',
  focus: 'Licensed GC who keeps communication clear, scopes tight, and quality consistent.',
};

const teamMembers = [
  {
    name: 'Hafsah Uddin',
    role: 'General Manager',
    bio: '',
  },
  {
    name: 'Abubakkar',
    role: 'Assistant Project Manager',
    bio: '',
  },
  {
    name: 'Zaid Khan',
    role: 'Web Developer',
    bio: '',
  },
  
];

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const contactLink = '/#contact';

const heroImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80';

function AboutPage() {
  return (
    <>
      <Hero
        title={`Meet the Team at ${company.name}`}
        subtitle="People who plan, manage, and deliver your builds across Georgia."
        ctaLabel="Talk with us"
        ctaTo={contactLink}
        bgImage={heroImage}
      />

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={3} textAlign="center">
            <Typography variant="h4" fontWeight={800} color="text.primary">
              About our crew
            </Typography>
            <Typography color="text.secondary">
              We are builders, planners, and coordinators who keep communication clear and jobsites
              organized from precon through punch.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }} bgcolor="background.paper">
        <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4 } }}>
          <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
              <Avatar sx={{ width: 96, height: 96, fontSize: 32, fontWeight: 700 }}>
                {initials(owner.name)}
              </Avatar>
              <Stack spacing={1}>
                <Typography variant="h5" fontWeight={800} color="text.primary">
                  {owner.name}
                </Typography>
                <Typography color="secondary" fontWeight={700}>
                  {owner.role}
                </Typography>
                <Typography color="text.secondary">{owner.bio}</Typography>
                <Typography color="text.secondary">{owner.focus}</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Stack spacing={3} textAlign="center" mb={2}>
            <Typography variant="h4" fontWeight={800} color="text.primary">
              The team that delivers
            </Typography>
            <Typography color="text.secondary">
              Field leadership and office support who keep every phase coordinated.
            </Typography>
          </Stack>
          <Grid container spacing={3} justifyContent="center">
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Stack spacing={1.5} alignItems="center" textAlign="center">
                    <Avatar sx={{ width: 64, height: 64, fontWeight: 700 }}>
                      {initials(member.name)}
                    </Avatar>
                    <Stack spacing={0.5}>
                      <Typography variant="h6" fontWeight={700} color="text.primary">
                        {member.name}
                      </Typography>
                      <Typography color="secondary" fontWeight={600}>
                        {member.role}
                      </Typography>
                    </Stack>
                    <Typography color="text.secondary">{member.bio}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AboutPage;
