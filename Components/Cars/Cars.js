import React from 'react'
import Car from '../Cars/car/Car'
import {useAppContext} from '../context'
export default function Cars() {
    const {allCars}= useAppContext()
     const cars = allCars.map(carInformation => <Car data ={carInformation} key={carInformation.id}> this one </Car>)
    return (
        <section className="section grid">
               {cars}
        </section>
    )
}
