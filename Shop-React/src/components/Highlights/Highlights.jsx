import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Comprehensive wellness',
    description:
      'Improve your mood, well-being, stress levels, energy levels, and sleep! ',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Balanced approach',
    description:
      'Integrating holistic fitness also promotes resilience, harmony, and a greater sence of fulfillment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Long term results',
    description:
      'Regular exercise can lead to overall age longevity and improved quality of life. ',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Enhanced performance',
    description:
      'Fitness can boost mental clarity, focus, and motivation! Optimizing overall performance for activities. ',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Stress reduction',
    description:
      'Reduce stress by releasing endorphins and neurotransmitters that promote happpiness and relaxation!',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Inner transformation',
    description:
      'Foster inner transformation by understanding oneself and allowing personal growth!',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            At Sacred Visionaries, we believe that true wellness goes beyond 
            physical fitness. Our holisitc approach to fitness encompasses 
            every aspect of your well being, ensuring that you achiveve not only
            a strong body but a healthy mind and spirit. Here are six reasons 
            why holistic fintess can be essential for you.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}