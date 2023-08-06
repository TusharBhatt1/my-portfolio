import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
 

export default function Contact() {
  return (
    <div>
      <p className='textShadow font-bold text-3xl p-2'>Open To</p>
      <div className='p-7 font-bold '>
      <CodeIcon className='text-slate-400'/>
      <br/>
      <br/>
        <p className='text-blue-800'>I am open to a role which allows me to apply my skills and knowledge in Front End to create cutting-edge web applications <br/><br/>
        As a fresher in this field, I understand that I have a lot to learn, 
        but I am ready to embrace the challenges and dedicate myself to mastering React + Next and its ecosystem. 
        I believe in the power of continuous learning and 
        staying up-to-date with the latest trends and best practices in the Front End community.</p>
       
       <br/>
       <CodeOffIcon className='text-slate-400'/>
     
        <div className='flex justify-center flex-col gap-2 items-center p-4'>
        <p className='textShadow text-center font-bold text-3xl mt-7 mb-4'>Contact</p>
        <a className='text-blue-500' href="https://www.linkedin.com/in/tushar-bhatt-59b64623b" target="_blank" rel="noreferrer">
       <LinkedInIcon  className=""/>
       </a>
       <p>+917617446649</p>
       <a href="mailto:tusharbhatt0135@gmail.com" target="_blank" rel="noreferrer">
       <MailOutlineIcon className='text-blue-500'/>
       </a>
        </div>
      </div>
    </div>
  )
}
