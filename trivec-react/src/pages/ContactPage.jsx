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

function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We would love to hear from you — let's talk about your project."
        ctaLabel="Call us"
        ctaTo={`tel:${company.phone.replace(/[^\d+]/g, '')}`}
      />

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontWeight={800} color="text.primary">
                    Send Us a Message
                  </Typography>
                  <Typography color="text.secondary">
                    Drop a note and we will respond within one business day.
                  </Typography>
                  <Stack component="form" spacing={2}>
                    <TextField label="Name" required fullWidth size="medium" />
                    <TextField label="Email" required type="email" fullWidth size="medium" />
                    <TextField label="Phone" fullWidth size="medium" />
                    <TextField label="Message" required fullWidth multiline minRows={4} size="medium" />
                    <Button variant="contained" color="secondary" size="large">
                      Send Message
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontWeight={800} color="text.primary">
                    Contact Information
                  </Typography>
                  <Typography color="text.secondary">
                    Reach us directly through phone, email, or schedule a visit.
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
                  <Stack spacing={1.5}>
                    <Typography color="text.primary" fontWeight={700}>
                      Office
                    </Typography>
                    <Typography color="text.secondary">
                      {company.address.street}, {company.address.city}, {company.address.state} {company.address.zip}
                    </Typography>
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
