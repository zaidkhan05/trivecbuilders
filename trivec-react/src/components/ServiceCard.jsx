import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function ServiceCard({ title, description, icon }) {
  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      <CardContent>
        <Stack spacing={2} alignItems="flex-start">
          <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
            <span aria-hidden>{icon}</span>
          </Avatar>
          <Typography variant="h6" fontWeight={700} color="text.primary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
