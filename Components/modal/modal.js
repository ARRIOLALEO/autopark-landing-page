import React from 'react'
import {useAppContext }from '../context'

export default function Modal({showModal}) {
    const {notShowTheModal} = useAppContext()
    return (
        <div className={showModal?'show-modal':'not-Show'}>
            <div className="close"> <button  onClick={()=>notShowTheModal()}>mario</button></div>
            <div className="intermodal">this is the information</div>
        </div>
    )
}
