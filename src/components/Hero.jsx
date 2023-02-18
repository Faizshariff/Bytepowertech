import React from 'react'
import gif from '../images/gif.gif'
import Button from '@mui/material/Button';


const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse p-6 sm:p-4 md:p-4 lg:p-8 gap-x-12 items-center gap-y-6 mt-2 sm:mt-12 lg:mt-2' >
    <img  className='block md:hidden' src={gif} alt='hero' />
    <img  className='hidden md:block w-45vw relative left-5vw bottom-5vh' src={gif} alt='hero' />
    <div className='flex flex-col gap-y-8  md:gap-y-8 lg:gap-16 ml-0 md:ml-12 mb-0 md:mb-12'>
      <h1 id='hero-h1' className='text-2xl sm:text-2xl lg:text-3xl ' >Innovative Tech Solutions for Design & Development</h1>
      <p id='hero-p' >Bytepower Technologies is renowned for its comprehensive services, expertise in design and
       development, and customer satisfaction . We guarantee top-tier security and competitive pricing,
        all while ensuring our clients' utmost contentment.</p>
      <Button variant="contained" sx={{ 
        backgroundColor: 'black',
        width:{
          xs:'80vw',
          sm:'20vw',
          lg:'15vw'
        }
      }} >Contact us</Button>
    </div>
    </div>
  )
}

export default Hero