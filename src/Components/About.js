import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {motion} from "framer-motion"


export default function About() {
  return (
   <motion.div initial={{y:-100}} animate={{y:0, transition:{duration:1}}} className='mt-7 p-2 text-start'>
   <p className='textShadow font-bold text-3xl	'>About</p>
   
     <div className='font-bold p-4 mt-2 '>
     <p className='italic text-slate-400 mb-2'>&lt;&gt;</p>
  
      <p>  Hello, I am a 23-year-old Front-End Engineer with a strong focus on developing web applications using React and Next.
      <br/><br/>
       I have a diverse skill set and hands-on experience with various other technologies and languages, enabling me to create robust and dynamic user interfaces.
      <br/><br/>
      My technology stack includes :
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
      <br/>
  

      <p className='italic text-slate-400 mt-2 font-cursive'>&lt;/&gt;</p>

      </div>
      <div className='flex justify-between items-center font-serif text-orange-500 text-center  font-bold text-xs sm:text-sm mt-7'>
        <span><MenuBookIcon/> Pursuing - MCA </span>
        <span><FmdGoodIcon/> Dehradun, Uttarakhand, India </span>
      </div>
      <div className=' animate-bounce flex justify-between mt-12'>
       <ArrowDropDownCircleIcon/>
       <ArrowDropDownCircleIcon/>
      </div>
      </motion.div>
  )
}
