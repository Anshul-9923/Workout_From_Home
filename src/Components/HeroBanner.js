import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg: '212px',xs:'70px'},//margin top
        ml:{sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625'
        fontWeight='600' fontSize='26px'>
            Workout From Home
        </Typography>
        <Typography font-weight={700} sx={{
            fontSize:{lg:'44px',xs:'40px'}
        }}>
            <b>Sweat Smile <br/> and Repeat</b>
        </Typography>
        <Typography fontSize='22px'
        LineHeight='35px' mb={2}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained" color='error' href='#exercises'
        sx={{backgroundColor:'#ff2625', padding:'10px'}}>Explore Exercises</Button>
        
        <img styles={{ minWidth: 30, minHeight: 30 }}
        src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner