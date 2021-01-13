import React from 'react'
import Car from '../Cars/car/Car'
import {allCars} from '../../data/allCars'

export default function Cars() {
    const cars = allCars.map(carInformation => <Car data ={carInformation}> this one </Car>)
    return (
        <section className="section grid">
               {cars}
        </section>
    )
}
