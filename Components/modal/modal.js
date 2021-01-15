import React from "react";
import { useAppContext } from "../context";
import {FaWhatsapp} from "react-icons/fa"
import {FcIphone} from "react-icons/fc"
import {GrInstagram} from "react-icons/gr"
import {AiFillFacebook} from "react-icons/ai"

export default function Modal({ showModal }) {
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
            <FaWhatsapp size={70} color="green"/>
        </div>
        <div className="contact-elements-2">
            <FcIphone size={70}/>
        </div>
        <div className="contact-elements-3">
            <GrInstagram size={70}  color="blue"/>
        </div>
         <div className="contact-elements-4">
            <AiFillFacebook size={70} color="blue"/>
         </div>
      </div>
    </div>
  );
}
