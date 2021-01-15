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
          <button className="btn" onClick={() => notShowTheModal()}>
            CLOSE
          </button>
        </div>
        <div className="contact-elements-1">
           <a href="https://wa.me/996555858585"> <FaWhatsapp size={70} color="green"/> </a>
        </div>
        <div className="contact-elements-2">
            <a href=""><FcIphone size={70}/></a>
        </div>
        <div className="contact-elements-3">
            <a  href="https://www.instagram.com/autopark.kgz/" target="_blank"><GrInstagram size={70}  color="blue"/></a>
        </div>
         <div className="contact-elements-4">
            <a href="https://www.facebook.com/CarRentKyrgyzstan" target="_blank"><AiFillFacebook size={70} color="blue"/></a>
         </div>
      </div>
    </div>
  );
}
