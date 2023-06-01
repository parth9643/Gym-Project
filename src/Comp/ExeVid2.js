import React from 'react';
import { Stack, Box, Typography } from '@mui/material';


const ExeVid2 = ({ exerciseVideos, name }) => {
  if (!Array.isArray(exerciseVideos)) {
    return <h1>file load nhi hua hai</h1>; // Display a loader while the videos are loading or handle the error condition appropriately
  }

  const maxVideos = 3; // Maximum number of videos to display
  const displayedVideos = [];

  for (let i = 0; i < exerciseVideos.length && i < maxVideos; i++) {
    const item = exerciseVideos[i];

    displayedVideos.push(
      <a
        key={i}
        className="exercise-video"
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
        <Box>
          <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
            {item.video.title}
          </Typography>
          <Typography fontSize="14px" color="#000">
            {item.video.channelName}
          </Typography>
        </Box>
      </a>
    );
  }

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography> 
    
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {displayedVideos}
      </Stack>
    </Box>
  );
};

export default ExeVid2;
