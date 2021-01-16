import React from 'react'
import Modal from '../../modal/modal'
import {useAppContext} from '../../context'
export default function Car({data}) {
     const {showModal, showTheModal} = useAppContext()
    const {carName,price,img,Passangers, Doors,Velocity ,Bagage, Seets,youTubeVideo,} = data
    return (
        <div className="grid-car">
           <div className="grid-1"> {carName}</div> 
           <div className="grid-1"><img src={img} alt={carName} className="img-car"/></div>
            <div className="elements-description">
                <div className="">
                <img src="/images/seats.png" all="seats of the car" />
                </div>
                <div className="">
                 {Seets}
                 </div>
           </div> 
            <div className="elements-description">
            <div className="">
                <img src="/images/bagage.png" all="seats of the car" />
             </div>
             <div className="">
                 {Bagage}
            </div>
            </div> 
            <div className="elements-description">
            <div className="">
                <img src="/images/door.png" all="seats of the car" />
            </div>
            <div className="">
                {Doors}
            </div>
                 </div> 
            <div className=""> 
            <div className="elements-description"><img src="/images/velocity.png" all="seats of the car" />
            </div>
            <div className="">
             {Velocity}
             </div>
             </div> 
             <div className=""> 
            <div className="elements-description">
            </div>
             </div>
             <div className=""> 
            <div className="elements-description"> From :<br/> $ {price}
            </div>
             </div>
             <div className="elements-description">Full Insured
            </div>
            <div className="elements-description">
            </div>
            <button className="btn grid-2" onClick={()=> showTheModal()}>Book Now</button>
            <Modal showModal={showModal} video ={youTubeVideo}/>
        </div>
    )
}
