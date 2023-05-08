import React from 'react'
import "./ContactPage.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import { Fade } from 'react-awesome-reveal';
export default function Footer() {

const openemail=()=>{
    window.open("mailto:tusharbhatt0135@gmail.com")
}
const openlinkedin=()=>{
    window.open("https://www.linkedin.com/in/tushar-bhatt-59b64623b")
}
 return(
    <Fade direction='right' delay={2000}>
      <div className='footerPage'>
           <h2>Contact</h2>
            <div className='contactdetails'>
            
            <div className='contact1' onClick={openemail}>
            <MailOutlineIcon/>
            <h3>tusharbhatt0135</h3>
            </div>
            <div className='contact1' onClick={openlinkedin}>
            <LinkedInIcon/>
            <h3>Tushar Bhatt</h3>
            </div>
            <div className='contact1'>
                <CallIcon/>
                <h3>+917617446649</h3>
            </div>
            </div>
            
        </div>
        </Fade>
     )}
