import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function About() {
  return (
   <div className='mt-7 p-2 text-start'>
   <p className='textShadow font-bold text-3xl	'>About</p>
   
     <div className='font-bold p-4 mt-4 '>
      <p>Hello , I am a Front End Engineer of age 23 .<br/> <br/>
      My expertise lies in developing front end web applications using React and Next .
      <br/><br/>
      I have experience with various other technologies and languages also , such as
      </p>
      <span className='font-semibold  text-blue-700'>
      React JS, Next JS ,
      HTML 5 ,
      JavaScript ES6 ,
      Redux ,
      Tailwind CSS ,
      SCSS SASS ,
      Material UI and more.
      </span> 
      </div>
      <div className='flex justify-between items-center font-serif text-orange-500 text-center  font-bold text-xs sm:text-sm mt-7'>
        <span><MenuBookIcon/> Pursuing - MCA </span>
        <span><FmdGoodIcon/> Dehradun, Uttarakhand, India </span>
      </div>
      <div className=' animate-bounce flex justify-between mt-12'>
       <ArrowDropDownCircleIcon/>
       <ArrowDropDownCircleIcon/>
      </div>
      </div>
  )
}
