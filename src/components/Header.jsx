import React from 'react'
import logo  from '../images/logo.png'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useState } from 'react';
import { Link } from 'react-scroll';



const Header = () => {



  const [open , Setopen] = useState(true);

  return (
    <>
    <nav className='flex flex-row justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 mb-4 md:mb-8 lg:mb-12' >
    <div className='flex flex-row items-end' >
    <img alt='logo' src={logo} className='relative top-0 sm:top-2 mr-2 sm:mr-4 pt-4  lg:mr-8 md:pt-2  xl:pt-4  xl:mr-12 w-10 sm:w-12 md:w-16 xl:w-24' />
    <h6 id='title' className='text-xs sm:text-base'>BytePower Technologies</h6>
    </div>
    <div className='hidden mt-4 mr-4 lg:mr-8 xl:mr-12 md:flex sm:flex-row space-x-8 ' >
    <Link to='services-section' smooth={true} duration={500}>
            <h1 className='header'>SERVICES</h1>
          </Link>
          <Link to='employee-section' smooth={true} duration={500}>
      <h1 className='header'>OUR-TEAM</h1> 
      </Link>
    </div>
    <Grid className='mt-5 block md:hidden'>
    <Button color="primary" onClick={() => { Setopen(!open) }} variant="text"><MenuSharpIcon sx={{ color : 'gray' }} /></Button>
    </Grid>
    </nav>
    <div className='md:hidden w-full h-full top-0' >
    <div className='fixed w-full h-100vh bg-black top-0 z-10 '  id={`${ open ? "mobbar-hide" : "mobbar-show" }`}>
    <div  className='absolute left-2/3 top-8 '>
    <Button color="primary" onClick={() => { Setopen(!open) }} variant="text"><CloseIcon  sx={{ color: 'white' }} /></Button>
    </div>
    <Grid container className='relative top-30vh pl-15vw items-center' direction="column" spacing={4}>
    <Grid xs={4}
  className='flex flex-row items-center w-100vw'
  >
  <Link to='services-section' smooth={true} duration={500}> <h1 className='header text-gray-50 p-8 mr-4 h-99vh'>SERVICES</h1> </Link>
  <KeyboardArrowRightIcon  sx={{ color: 'white', }}  />
</Grid>
    <Grid xs={4}
  className='flex flex-row items-center w-100vw'
  >
   <Link to='employee-section' smooth={true} duration={500}> <h1  className='header text-gray-50 p-8 mr-4 h-99vh'>OURTEAM</h1> </Link>
  <KeyboardArrowRightIcon sx={{ color: 'white' }} />
</Grid>  
</Grid>
</div>
    </div>
    </>
  )
}


export default Header
