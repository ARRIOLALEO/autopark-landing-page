import React from "react";
import { useAppContext } from "../context";
import {FaWhatsapp} from "react-icons/fa"
import {FcIphone} from "react-icons/fc"
import {GrInstagram} from "react-icons/gr"
import {AiFillFacebook} from "react-icons/ai"

export default function Modal({ showModal,video}) {
  const { notShowTheModal, showTheModal } = useAppContext();
   const wasPresed = (e) => {
    if (e.target.id === "theBanckground") {
      notShowTheModal();
    }
  };

  return (
    <div
      className={showModal ? "show-modal" : "not-Show"}
      id="theBanckground"
      onClick={(e) => {
        wasPresed(e);
      }}
    >
      <div
        className="modal-white"
        id="theCorpo"
        onClick={(e) => {
          wasPresed(e);
        }}
      >
        <div className="close">
          {" "}
          <button className="btn" onClick={() => notShowTheModal()} aria-label="Book a Car Bishkek">
            CLOSE
          </button>
        </div>
        <div className="contact-elements-1 is-mobile">
           <a href="https://wa.me/996555858585"> <FaWhatsapp size={70} color="green"/> </a>
        </div>
        <div className="contact-elements-2 is-mobile">
            <a href=""><FcIphone size={70}/></a>
        </div>
        <div className="contact-elements-3 is-mobile">
            <a  href="https://www.instagram.com/autopark.kgz/" target="_blank"><GrInstagram size={70}  color="blue"/></a>
        </div>
         <div className="contact-elements-4 is-mobile">
            <a href="https://www.facebook.com/CarRentKyrgyzstan" target="_blank"><AiFillFacebook size={70} color="blue"/></a>
         </div>
         

         {/*  */}
         <div className="contact-elements-1 is-mobile-ok">
           <a href="https://wa.me/996555858585"> <FaWhatsapp size={30} color="green"/> <span className="text">+996 555858585</span></a>
        </div>
        <div className="contact-elements-2 is-mobile-ok">
            <a href=""><FcIphone size={30}/> <span className="text">+996 555858585</span></a>
        </div>
        <div className="contact-elements-3 is-mobile-ok">
            <a  href="https://www.instagram.com/autopark.kgz/" target="_blank"><GrInstagram size={30}  color="blue"/><span className="text">@autopark.kgz </span></a>
        </div>
         <div className="contact-elements-4 is-mobile-ok">
            <a href="https://www.facebook.com/CarRentKyrgyzstan" target="_blank"><AiFillFacebook size={30} color="blue"/><span className="text">@CarRentKyrgyzstan</span></a>
         </div>
      </div>
    </div>
  );
}
