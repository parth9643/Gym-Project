import React from 'react'
import { Box,Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png';

const Banner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="35px">Fitness Club</Typography>

      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>

      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="30px">
        Check out the most effective exercises <br/> personalized to you
      </Typography>

      <Button variant='contained' color='error' href='#exercises' style={{ marginTop: '45px', textDecoration: 'none', width: '180px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '15px', textTransform: 'none', color: 'white', borderRadius: '20px' }}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#FF2625"
      sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default Banner
