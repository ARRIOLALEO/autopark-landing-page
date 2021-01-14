import React from 'react'

export default function Car({data}) {
    const {carName,price,img,Passangers, Doors,Velocity ,bagage, Seets} = data
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
                 {bagage}
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
            <button className="btn grid-2">Book Now</button>
        </div>
    )
}
