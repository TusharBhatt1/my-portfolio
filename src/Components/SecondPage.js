import React from 'react'
import { Fade } from 'react-awesome-reveal'
import coding from "../Images/coding.jpg"
import DataObjectIcon from '@mui/icons-material/DataObject';
import "./SecondPage.scss"

export default function SecondPage() {
  return (
    <Fade className='maincontainer' delay={1500} style={{marginTop:"10vh"}} direction='left' duration={2000} >
    <h3>
      Projects
    </h3>
    <div className='projects'>
       <div className='projectsone'>
        <a href='https://myecommerce-pi.vercel.app/' target='blank'>React-Ecommerce App <DataObjectIcon/></a>
        <a href='https://tusharbhatt1.github.io/MyMovieApp/' target='blank'>React-Movie App <DataObjectIcon/></a>
        <a href='https://tusharbhatt1.github.io/Country_Guide_App/' target='blank'>JS-Country Guide <DataObjectIcon/></a>
        </div>
        <div className='projectstwo'>
            <img height={"40%"} width={"40%"} src={coding}/>
        </div>
    </div>

    </Fade>
  )
}
