import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Contact() {
  return (
    <div>
      <p className='font-bold text-3xl p-2'>Open To</p>
      <div className='p-7 font-bold '>
        <p className='text-blue-800'>I am open to a role which allows me to apply my skills and knowledge in React to create cutting-edge web applications <br/><br/>
        As a fresher in this field, I understand that I have a lot to learn, 
        but I am ready to embrace the challenges and dedicate myself to mastering React and its ecosystem. 
        I believe in the power of continuous learning and 
        staying up-to-date with the latest trends and best practices in the React community.</p>

        <div className='flex justify-center flex-col gap-2 items-center p-4'>
        <p className='text-center font-bold text-3xl mt-7 mb-4'>Contact</p>
        <a className='text-blue-500' href="https://www.linkedin.com/in/tushar-bhatt-59b64623b" target="_blank" rel="noreferrer">
       <LinkedInIcon  className=""/>
       </a>
       <p>+917617446649</p>
        </div>
      </div>
    </div>
  )
}
