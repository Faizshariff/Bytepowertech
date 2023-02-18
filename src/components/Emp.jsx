import React, { useState , useEffect, useRef } from 'react'
import { client } from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";


const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Emp = () => {
  const [emp, Setemp] = useState([]);
  const [width, Setwidth] = useState(0);
  const carousel = useRef();




  useEffect(() => {
    const query = '*[_type == "employee"]';
    client.fetch(query)
    .then((data) => {
    Setemp(data)})
  }, [])

  const download = (ref) => {
    const [_file , id, extension] = ref.split('-');
    const ad = `https://cdn.sanity.io/files/${'zd3mojmw'}/${'production'}/${id}.${extension}` ;
    fetch(ad)
    .then(res => res.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `resume.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
  };


  useEffect(()=> {
    setTimeout(()=>{
      Setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth )
     }, 1000)
  }, [])


  return (
    <section id='employee-section'>
    <div className='flex flex-col mt-12 mb-20 overflow-x-hidden' >
    <Grid className='ml-8vw mb-12 sm:mb-12 lg:mb-10 flex flex-row'>
   <p className='mr-4 text-xl sm:text-2xl lg:text-3xl font-medium'> MEET OUR TEAM </p>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</Grid>
<motion.div drag='x' dragConstraints={{ right:0 , left : -width }} >
    <div ref={carousel} className='ml-40vw sm:ml-35vw lg:ml-45vw flex flex-row'>
      {emp.map((data , i) => (
        <Grid key={i}>
        <div className='image-container mb-3 cursor-grab' 
         style={{
    backgroundImage: `url(${urlFor(data.image).url()})`
        }}
          >
        {data.resume && (
                  <Button
                  onClick={() => download(data.resume.asset._ref)}
                  className='btn-rad bg-black  text-white p-2 text-center '
                   variant="contained" sx={{ 
        backgroundColor: 'black',
        width : {
      xxs: '38vw' , // small phone
      xs: '38vw', // phone
      sm: '25vw' , // tablets
      md: '25vw', // small laptop
      lg: '17vw', // desktop
      xl: '17vw' // large screens
    },
      }} >Resume</Button>
            )}
        </div>
          <h3 className='font-semibold mb-1' >{data.empname}</h3>
          <h3 className='font-normal'>{data.jobtitle}</h3>
        </Grid>
      ))}
      </div>
      </motion.div>
      </div>
      </section>
  )
}

export default Emp