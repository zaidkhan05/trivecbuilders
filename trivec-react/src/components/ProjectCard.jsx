import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function ProjectCard({ title, description, image }) {
  const src = Array.isArray(image) ? image[0] : image;
  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      {src && (
        <CardMedia component="img" height="180" image={src} alt={title} sx={{ objectFit: 'cover' }} />
      )}
      <CardContent>
        <Stack spacing={1.5}>
          <Typography variant="subtitle2" color="text.secondary" letterSpacing={0.5} textTransform="uppercase">
            Project
          </Typography>
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

export default ProjectCard;
