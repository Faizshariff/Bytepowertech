import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='flex flex-row bg-black text-white p-6 sm:p-8 lg:p-6 items-baseline justify-between '>
    <Grid>
    <Typography id="modal-modal-description" sx={{ mt: 2 , fontSize :{
             xxs: '15px' , // small phone
   xs: '15px', // phone
   sm: '18px' , // tablets
   md: '18px', // small laptop
   lg: '20px', // desktop
   xl: '20px' // large screens
            }
              }}>
             Ⓒ2023 Copyright BPT
            </Typography>
    </Grid>
    <Grid className='flex flex-row'>
    <a className='p-1.5 sm:p-4 lg:p-6' href='https://twitter.com/bytepowertech?s=21&t=LZLedRt0h2n5BUN07Vc-jw' target="_blank"  rel="noreferrer" ><TwitterIcon  /></a>
    <a className='p-1.5 sm:p-4 lg:p-6' href='https://instagram.com/bytepowertechnologies?igshid=YmMyMTA2M2Y=' target="_blank"  rel="noreferrer" ><InstagramIcon  /></a>
    <a className='p-1.5 sm:p-4 lg:p-6' href='http://www.linkedin.com/in/byte-power-350020264' target="_blank" rel="noreferrer" ><LinkedInIcon  /></a>
    </Grid>
    </div>
  )
}

export default Footer