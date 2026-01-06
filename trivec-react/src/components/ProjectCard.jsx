import { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

function ProjectCard({ title, description, image }) {
  const images = (Array.isArray(image) ? image : [image]).filter(Boolean);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    setIndex(0);
  }, [images.length]);

  const hasMultiple = images.length > 1;
  const current = images[index] ?? '';

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50; // px required to count as a swipe
    if (delta > threshold) {
      // swipe left -> next
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (delta < -threshold) {
      // swipe right -> previous
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      {current && (
        <Box position="relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <CardMedia
            component="img"
            height="200"
            image={current}
            alt={title}
            sx={{ objectFit: 'contain', touchAction: 'pan-y', bgcolor: 'background.paper' }}
          />
          {hasMultiple && (
            <>
              <IconButton
                aria-label="Previous image"
                size="small"
                onClick={() => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.9)' }}
              >
                ‹
              </IconButton>
              <IconButton
                aria-label="Next image"
                size="small"
                onClick={() => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.9)' }}
              >
                ›
              </IconButton>
            </>
          )}
        </Box>
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
          {hasMultiple && (
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
              {images.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setIndex(i)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: i === index ? 'text.primary' : 'divider',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
