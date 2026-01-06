import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import company from '../data/companyinfo.json';

function Footer() {
  return (
    <Box component="footer" py={4} bgcolor="primary.main" color="primary.contrastText">
      <Stack spacing={1} alignItems="center">
        <Typography variant="body2">
          © 2025 {company.name}. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href={company.social.instagram} color="inherit" underline="hover" rel="noreferrer" target="_blank">
            Instagram
          </Link>
          {/*lisence number*/}
          <Typography variant="body2">
            License #GCC0009345
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
