import { Grid } from '@mui/material'
import React from 'react'
import Servicestxt from './Servicestxt'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width : {
   xxs: '80vw' , // small phone
   xs: '80vw', // phone
   sm: '50vw' , // tablets
   md: '50vw', // small laptop
   lg: '60vw', // desktop
   xl: '60vw' // large screens
 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(null);
  const handleOpen = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  return (
    <section id='services-section'>
      <h1 className='text-center p-4 mb-2 mt-8 text-xl sm:text-2xl' >THE SERVICES WE PROVIDE</h1>
      <div className='grid grid-cols-2  md:grid-cols-5 space-y-8 p-8 items-baseline content-center' >
        { Servicestxt.map((data) => (
          <>
            <button onClick={() => handleOpen(data)} key={data.title} >
              <Grid className='h-5/6 m-2 grid text-center justify-center items-center align-middle justify-items-center mb-4'>
                <img src={data.image} className='mb-2  lg:mb-4 w-8/12 ' alt='i' />
                <span className=' mb-2 md:mb-4 w-8/12 text-xs sm:text-sm m-4'  >{data.title}</span>
              </Grid>
            </button>
          </>
        ))}
      </div>
      {selectedService && (
        <Modal
          open={selectedService !== null}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedService.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 , fontSize :{
             xxs: '15px' , // small phone
   xs: '15px', // phone
   sm: '18px' , // tablets
   md: '18px', // small laptop
   lg: '20px', // desktop
   xl: '20px' // large screens
            }
              }}>
              {selectedService.content}
            </Typography>
          </Box>
        </Modal>
      )}
    </section>
  )
}

export default Services
