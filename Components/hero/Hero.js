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
          <h1>Rent a Car <br/> in Kyrgyzstan</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn" onClick={()=>{
            showTheModal()
          }}>Start now</button>
          
        </article>
        <article className="hero-images">
      <img src="/images/lexus.png" className="phone-img" alt="phone" />
      </article>
      </div>
      <Modal showModal={showModal}/>
    </section>
      
    

</>
  );
}
