import React from 'react'

export default function Car({data}) {
    const {carName,price,img,Passangers} = data
    return (
        <div className="grid-car">
           <div className="grid-1"> {carName}</div> 
           <div className="grid-1"><img src={img} alt={carName} className="img-car"/></div>
            <img src="/images/seats.png" all="seats of the car" />
            <img src="/images/bagage.png" all="seats of the car" />
            <img src="/images/door.png" all="seats of the car" />
            <img src="/images/velocity.png" all="seats of the car" />
            <button class="btn">Book Now</button>
        </div>
    )
}
