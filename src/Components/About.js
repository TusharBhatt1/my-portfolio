import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function About() {
  return (
   <div className='mt-7 p-2 text-start'>
   <p className='font-bold text-3xl'>About</p>
   
     <div className='font-bold p-4 mt-4 '>
      Hello , I am a React Engineer of age 23 .<br/> <br/>
      As a Front End developer, my expertise lies in developing front end web applications using the ReactJS library.
      <br/><br/>
      I have experience with various other technologies and languages also , such as
     
      <p className='font-semibold  text-blue-700'>
      React JS, NextJS
      HTML 5 ,
      JavaScript ES6 ,
      Redux ,
      Tailwind CSS ,
      SCSS SASS ,
      Material UI and more.
      </p> 
      </div>
      <div className='flex justify-between items-center font-serif text-orange-500 text-center  font-bold text-xs sm:text-sm mt-7'>
        <p><MenuBookIcon/> Pursuing - MCA </p>
        <p><FmdGoodIcon/> Dehradun, Uttarakhand, India </p>
      </div>
      <div className=' animate-bounce flex justify-between mt-12'>
    <ArrowDropDownCircleIcon/>
    <ArrowDropDownCircleIcon/>
      </div>
      </div>
  )
}
