
import { motion } from "framer-motion"
import "./Project.css"
import { useEffect} from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { AllProjects } from "../AllProjects"
export default function Projects() {
   

    const {ref, inView}= useInView({threshold:0.1})
   
    const animation = useAnimation()

    useEffect(()=>{
        if(inView)
        {
            animation.start({
                y:0,opacity:1,
                transition:{
                    type:"spring",duration:2, bounce:0.3
                }
            })
        }
        if(!inView)
        {
            animation.start({y:"8vw",opacity:0})
        }

    },[inView])
 
  return (
    <div className="p-2 mt-7">

        <p className='textShadow font-bold text-3xl mt-12 '>My Work</p>

        <div ref={ref} className="flex flex-wrap justify-center items-center gap-20  p-10 ">
    
         {AllProjects.map((project)=>(
            <div>
            <motion.div 
           animate={animation}
            className="BS flex flex-wrap gap-20 rounded-full justify-center items-center text-center text-white font-extrabold  p-4 rounded-xl hover:bg-blue-500 hover:text-white h-[280px] w-[270px]">
                 <a href={project.link} target="_blank" rel="noreferrer">
                 <img
          src={project.image}
          className="h-[100px] w-full"
          alt={project.name}
        />    <div className=" flex flex-col  items-center mt-5 justify-center text-[10px] h-[100px] ">
                <p className="text-[20px]">{project.name}</p>
                <p className="text-slate-500 mt-2">{project.tech}</p>
                </div> 
                </a>
            </motion.div>
            </div>
         ))
            
           }
           
            {/* <motion.div 
           animate={animation} className="BS    rounded-lg hover:bg-blue-500 hover:text-white ">
                 <a href="https://net-flix-7ewm.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NetflixImage} className="h-auto w-auto" alt="Netflix"/>
                Netflix
                </a>
            </motion.div>
         <motion.div animate={animation} className=" BS   p-2 rounded-lg hover:bg-blue-500 hover:text-white ">
                 <a href="https://chat-room-dc6ea.web.app/" target="_blank" rel="noreferrer">
                <img src={ChatRoomApp} className="h-auto w-auto" alt="ChatRoom"/>
                Chat Room
                </a>
            </motion.div>

            <motion.div animate={animation} className="BS   p-2 rounded-lg hover:bg-blue-500 hover:text-white ">
                 <a href="https://cryptoweb-blond.vercel.app/" target="_blank" rel="noreferrer">
                <img src={CryptoBuddy} className="h-auto w-auto" alt="NewEcommerce"/>
                React Crypto
                </a>
            </motion.div>
            <motion.div animate={animation} className="BS   p-2 rounded-lg hover:bg-blue-500 hover:text-white">
            <a href="https://note-app-chi-liard.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NoteApp} className="" alt="NewEcommerce"/>
               Advanced Notes App
            </a>
            </motion.div>
            <motion.div animate={animation}  className="BS   p-2 rounded-lg hover:bg-blue-500 hover:text-white">
            <a href="https://new-ecommerce-five.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NewEcommerce} className="" alt="NewEcommerce"/>
               React Ecommerce
            </a>
            </motion.div>
           
            <motion.div animate={animation} className="BS   p-2 rounded-lg hover:bg-blue-500 hover:text-white">
            <a href="https://myecommerce-pi.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Ecommerce} className="h-auto w-auto" alt="NewEcommerce"/>
               React Ecommerce</a>
            </motion.div>
            */}
           
        </div>
    </div>
  )
}
