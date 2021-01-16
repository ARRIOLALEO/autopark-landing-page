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
            <button onClick={()=>notShowMenu()}>Close the menu</button>
            <h1> Contac Us </h1>
                <div className="contact-elements-1">
           <a href="https://wa.me/996555858585"> <FaWhatsapp size={50} color="green"/> </a>
        </div>
        <div className="contact-elements-2">
            <a href=""><FcIphone size={50}/></a>
        </div>
        <div className="contact-elements-3">
            <a  href="https://www.instagram.com/autopark.kgz/" target="_blank"><GrInstagram size={50}  color="blue"/></a>
        </div>
         <div className="contact-elements-4">
            <a href="https://www.facebook.com/CarRentKyrgyzstan" target="_blank"><AiFillFacebook size={50} color="blue"/></a>
         </div>
        </div>
    )
}
