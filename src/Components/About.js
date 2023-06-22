import React from 'react'
import "./About.scss"

export default function About() {
  return (

    <div className='main'>
    <h2>About</h2>      
    <div className='about'>
     <div>
      Hello , this is <span className='span' >T</span>ushar <span className='span'>B</span>hatt. I am a 23 year old developer.<br/>
      As a Front End developer, my expertise lies in developing front end web applications using the ReactJS library.
      In addition to this , I am also proficient in other web technologies such as HTML, CSS, and JavaScript. 
      I have experience with various front-end frameworks and libraries also , including
      </div>
      <ul>
      <li>HTML 5</li>
      <li>JavaScript ES6</li>
      <li>Redux</li>
      <li>TypeScript</li>
      <li>Tailwind CSS</li>
      <li>SCSS SASS</li>
      <li>Material UI and more</li>
      </ul>
     
    </div>
    </div>
  )
}
