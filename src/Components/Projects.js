import NewEcommerce from "../Images/New-Ecommerce.png"
import CryptoBuddy from "../Images/CryptoBuddy.png"
import Ecommerce from "../Images/Ecommerce.png"
import NoteApp from "../Images/Note-App.png"
export default function Projects() {
  return (
    <div className="p-2 mt-7">

        <p className='font-bold text-3xl mt-12 '>My Work</p>

        <div className="flex gap-7 flex-wrap justify-center items-center p-12 text-center font-bold font-serif ">

            <div className="border-b-8 border-blue-300 p-2 rounded-lg hover:border-blue-500 ">
            <a href="https://note-app-chi-liard.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NoteApp} className="" alt="NewEcommerce"/>
               Advanced Note App
            </a>
            </div>
            <div className="border-b-8 border-blue-300 p-2 rounded-lg hover:border-blue-500 ">
            <a href="https://new-ecommerce-five.vercel.app/" target="_blank" rel="noreferrer">
                <img src={NewEcommerce} className="" alt="NewEcommerce"/>
               React Ecommerce
            </a>
            </div>
            <div className="border-b-8 border-blue-300 p-2 rounded-lg hover:border-blue-500 ">
                 <a href="https://new-ecommerce-five.vercel.app/" target="_blank" rel="noreferrer">
                <img src={CryptoBuddy} className="h-auto w-auto" alt="NewEcommerce"/>
                React Crypto
                </a>
            </div>
            <div className="border-b-8 border-blue-300 p-2 rounded-lg hover:border-blue-500 ">
            <a href="https://myecommerce-pi.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Ecommerce} className="h-auto w-auto" alt="NewEcommerce"/>
               React Ecommerce</a>
            </div>
           
           
           
        </div>
    </div>
  )
}
