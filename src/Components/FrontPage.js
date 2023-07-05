import React from 'react'
import { Parallax } from 'react-parallax'
import bg from "../Images/backgroundimage.jpg"
import "./FrontPage.scss"
import Typewriter from 'typewriter-effect'
import logo from '../Images/logo512.png'
import myself from "../Images/my.webp"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function FrontPage() {
  return (
    <Parallax className='parallax'  strength={-600}>
<div className='frontpage'>
<div className='main'>
<div className='leftside'>
<div className='left1'>
    Hey this is <br/> <h2>Tushar Bhatt</h2> 
</div>
<div className='left2'>
<h3>
<Typewriter options={{strings:"A React <br/>  Front End Developer",autoStart:true,loop:true}}/>
</h3>
<img className='img' height={"100vh"} width={"100vh"} alt='logo' src={logo}></img>
</div>

</div>
<div className='rightside'>
<img className='myself' src={myself} alt='Myself' />
</div>

</div>
<footer className='footer'>
<div>
<p>Pursuing: Masters In Computer Application <BorderColorIcon/> </p> 
</div>
<div>
<p><LocationOnIcon/> Dehradun, Uttarakhand , India</p>
</div >
</footer>
</div>
</Parallax>

  )
}
