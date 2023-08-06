
import Myself from "../Images/my.webp"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from "./About";
import Projects from './Projects';
import Contact from "./Contact";

export default function Front() {
  return (
    <div className="  flex flex-col">

    {/* SIDE BAR */}
    
    <div className=' m-auto z-10 w-full block h-96 sm:h-screen sm:fixed bg-blue-700 text-white z-2 w-52 sm:w-80 font-serif flex font-semibold flex-col justify-center gap-5 items-center '>

        <img src={Myself} alt="Tushar Bhatt" className=' font-bold h-32 w-32 rounded-full'/>
        <p className="text-4xl text-center font-bold">Tushar Bhatt</p>
        <p className="flex justify-center items-center text-lg" >Front End Engineer <WhatshotIcon className="text-orange-400 text-center "
        /> </p>
        
        {/* Icons */}
        <div className="flex gap-7">

       <a href="https://www.linkedin.com/in/tushar-bhatt-59b64623b" target="_blank" rel="noreferrer">
       <LinkedInIcon  className=""/>
       </a>
       <a href="mailto:tusharbhatt0135@gmail.com" target="_blank" rel="noreferrer">
       <MailOutlineIcon/>
       </a>
       <a href="https://github.com/TusharBhatt1" target="_blank" rel="noreferrer">
       <GitHubIcon/>
       </a>

        </div>
    </div>

    {/* SIDE BAR ENDS */}
   <div className="ml-0 sm:ml-80 p-2">
   <About/>
   <Projects/>
   <Contact/>
   </div>
    </div>
  )
}
