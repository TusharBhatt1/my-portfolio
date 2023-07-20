import {Netflix} from "../Images/Clone (3).png"
import {ChatRoom} from "../Images/Clone (4).png"
import NewEcommerce from "../Images/New-Ecommerce.png"
import CryptoBuddy from "../Images/CryptoBuddy.png"
import Ecommerce from "../Images/Ecommerce.png"
import NoteApp from "../Images/Note-App.png"
export default function Projects() {
  return (
    <div className="p-2 mt-2">

        <p className='font-bold text-3xl mt-12 '>My Work</p>

        <div className="flex gap-12 flex-wrap justify-center items-center p-12 text-center font-bold font-serif ">

            <div className="border-b-4 border-black p-2 rounded-lg hover:bg-blue-500 hover:text-white ">
                 <a href="https://net-flix-7ewm.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Netflix} className="h-auto w-auto" alt="Netflix"/>
                Netflix
                </a>
            </div>
            <div className="border-b-4 border-black p-2 rounded-lg hover:bg-blue-500 hover:text-white ">
                 <a href="https://chat-room-dc6ea.web.app/" target="_blank" rel="noreferrer">
                <img src={ChatRoom} className="h-auto w-auto" alt="ChatRoom"/>
                Chat Room
                </a>
            </div>
            <div className="border-b-4 border-black p-2 rounded-lg hover:bg-blue-500 hover:text-white ">
                 <a href="https://cryptoweb-blond.vercel.app/" target="_blank" rel="noreferrer">
                <img src={CryptoBuddy} className="h-auto w-auto" alt="NewEcommerce"/>
                React Crypto
                </a>
            </div>
            <div className="border-b-4 border-black p-2 rounded-lg hover:bg-blue-500 hover:text-white">
            <a href="https://note-app-chi-liard.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NoteApp} className="" alt="NewEcommerce"/>
               Advanced Notes App
            </a>
            </div>
            <div className="border-b-4 border-black p-2 rounded-lg hover:bg-blue-500 hover:text-white">
            <a href="https://new-ecommerce-five.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NewEcommerce} className="" alt="NewEcommerce"/>
               React Ecommerce
            </a>
            </div>
           
            <div className="border-b-4 border-black p-2 rounded-lg hover:bg-blue-500 hover:text-white">
            <a href="https://myecommerce-pi.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Ecommerce} className="h-auto w-auto" alt="NewEcommerce"/>
               React Ecommerce</a>
            </div>
           
           
           
        </div>
    </div>
  )
}
