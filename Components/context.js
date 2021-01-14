import {createContext, useContext, useState} from 'react'
import {allCars} from '../data/allCars'
const AppContext = createContext()

export function AppWraper({ children}){
    const [showModal, setShowModal] = useState(false)
    function showTheModal(){
        setShowModal(true)
    }
    const notShowTheModal = () =>{
        setShowModal(false)
    }
    let shareState ={allCars,showModal,showTheModal,notShowTheModal}
    return (<AppContext.Provider value={shareState}>
        {children}
    </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}