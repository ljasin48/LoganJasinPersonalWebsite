import { Avatar, Box, Container, Link, Typography } from '@mui/material';
import { calculateDuration } from '../util/utils';

export function HomePage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      {/* Profile Picture */}
      <Avatar src="avatar.png" alt="Profile" sx={{ width: 256, height: 256, mb: 3, boxShadow: 3 }} />

      {/* Bio */}
      <Box textAlign="center" sx={{ maxWidth: 600, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Logan Jasin
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hi, I'm Logan Jasin! I'm a software engineer passionate about creating innovative solutions and learning new
          technologies. In my free time, I enjoy playing hockey and spending time with friends and family. Welcome to my
          personal website!
        </Typography>
      </Box>

      {/* Social */}
      <Box display="flex" gap={3} mb={4}>
        <Link
          href="https://github.com/ljasin48"
          target="_blank"
          color="primary"
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/logan-jasin"
          target="_blank"
          color="primary"
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          LinkedIn
        </Link>
      </Box>

      {/* Education */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium', color: 'text.primary' }}>
          Education
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          <b>Master of Science in Software Engineering</b>
          <br />
          The Pennsylvania State University - World Campus
          <br />
          GPA 3.94 / 4.0 | August 2020 - August 2022
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Bachelor of Science in Computer Science</b>
          <br />
          The Pennsylvania State University - University Park
          <br />
          GPA 3.59 / 4.0 | August 2013 -  May 2017
        </Typography>
      </Box>

      {/* Experience */}
      <Box textAlign="center">
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium', color: 'text.primary' }}>
          Experience
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          <b>Amazon | Software Engineer II (L5)</b>
          <br />
          Translation Services Organization
          <br />
          November 2021 - Present ({calculateDuration('2021-11-01')})
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          <b>General Dynamics Mission Systems | Senior Software Engineer</b>
          <br />
          October 2018 - November 2021 ({calculateDuration('2018-10-01', '2021-11-01')})
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          <b>Bettis Atomic Power Laboratory | Systems Analyst</b>
          <br />
          July 2018 - October 2018 ({calculateDuration('2018-07-01', '2018-10-01')})
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          <b>American Eagle Outfitters | UI Engineer</b>
          <br />
          July 2017 - July 2018 ({calculateDuration('2017-07-01', '2018-07-01')})
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
