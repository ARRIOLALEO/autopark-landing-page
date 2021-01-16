import React from 'react'
import {useAppContext} from '../Components/context'
import {FaWhatsapp} from "react-icons/fa"
import {FcIphone} from "react-icons/fc"
import {GrInstagram} from "react-icons/gr"
import {AiFillFacebook} from "react-icons/ai"

export default function Menu({showTheMenu}) {
    const {notShowMenu } = useAppContext()
    return (
        <div className={showTheMenu?'show-menu center-elements':'notshow-menu'}>
            <button className="btn" onClick={()=>notShowMenu()}>Close the menu</button>
                <div className="contact-elements-1">
           <a href="https://wa.me/996555858585"> <FaWhatsapp size={40} color="green"/><span class="text">+996 555858585</span> </a>
        </div>
        <div className="contact-elements-2">
            <a href=""><FcIphone size={40}/><span class="text">+996 555858585</span></a>
        </div>
        <div className="contact-elements-3">
            <a  href="https://www.instagram.com/autopark.kgz/" target="_blank"><GrInstagram size={40}  color="blue"/><span class="text">@autopark.kgz</span> </a>
        </div>
         <div className="contact-elements-4">
            <a href="https://www.facebook.com/CarRentKyrgyzstan" target="_blank"><AiFillFacebook size={40} color="blue"/><span class="text">@CarRentKyrgyzstan</span>  </a>
         </div>
        </div>
    )
}
