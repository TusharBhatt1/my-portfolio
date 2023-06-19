import React from 'react'
import { Fade } from 'react-awesome-reveal'
import DataObjectIcon from '@mui/icons-material/DataObject';
import "./MyWork.scss"
import cryptobuddy from "../Images/CryptoBuddy.png"
import ecommerce from "../Images/Ecommerce.png"
import movie from "../Images/Movie.png"
import countryGuide from "../Images/CountryGuide.png"

export default function SecondPage() {
  return (
    <>
    <h3 className='header'>
      My Work 
    </h3>
    <Fade className='maincontainer' delay={1000}  direction='left' duration={1000} >
    
    <div className='projects'>
       <div className='projectsone'>
       <>
       <img src={cryptobuddy} alt='project'/>
       <a href='https://cryptoweb-blond.vercel.app/' target='blank'>React - Cryto Buddy</a>
       </>
       <>
        <img src={ecommerce} alt='project'/>
        <a href='https://myecommerce-pi.vercel.app/' target='blank'>React - Ecommerce </a>
       </>
       <>
        <img src={movie} alt='project'/>
        <a href='https://tusharbhatt1.github.io/MyMovieApp/' target='blank'>React - Movie App </a>
       
        </>
        <>
        <img src={countryGuide} alt='project'/>

        <a href='https://tusharbhatt1.github.io/Country_Guide_App/' target='blank'>JS - Country Guide <DataObjectIcon/></a>
        </>
        </div>
        
    </div>

    </Fade>
    </>
  )
}
