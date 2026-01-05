import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Hero from '../components/Hero';
import company from '../data/companyinfo.json';

const heroImage = '/atl.png';

function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We would love to hear from you — let's talk about your project."
        bgImage={heroImage}
      />

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
          <Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontWeight={800} color="text.primary">
                    Contact Information
                  </Typography>
                  <Typography color="text.secondary">
                    Reach us directly through phone or email.
                  </Typography>
                  <Stack spacing={1.5}>
                    <Typography color="text.primary" fontWeight={700}>
                      Phone
                    </Typography>
                    <Link href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} underline="hover">
                      {company.phone}
                    </Link>
                  </Stack>
                  <Stack spacing={1.5}>
                    <Typography color="text.primary" fontWeight={700}>
                      Email
                    </Typography>
                    <Link href={`mailto:${company.email}`} underline="hover">
                      {company.email}
                    </Link>
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

export default ContactPage;
