import React, {useState} from "react";
import Modal from '../../Components/modal/modal'
import {useAppContext} from '../context'
export default function Hero() {
const {showTheModal,showModal} = useAppContext()
  return (
      <>
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Car for rent <br/>in Kyrgyzstan</h1>
          <p>
          Car rent in Kyrgyzstan is very convenient
           for the tourists and those who came to our beautiful
            country for a business, rent a car, car rent.
          </p>
          <button className="btn" onClick={()=>{
            showTheModal()
          }} aria-label="Book a Car Bishkek">Book a Car Now</button>
          
        </article>
        <article className="hero-images">
      <img src="/images/lexus.png" className="phone-img" alt="phone image lexus bishkek" />
      </article>
      </div>
      <Modal showModal={showModal}/>
    </section>
      
    

</>
  );
}
