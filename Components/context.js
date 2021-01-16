import {createContext, useContext, useState} from 'react'
import {allCars} from '../data/allCars'
const AppContext = createContext()

export function AppWraper({ children}){
    const [showModal, setShowModal] = useState(false)
    const [showMenu ,setShowMenu] =useState(false)
    function showTheModal(){
        setShowModal(true)
    }
    const notShowTheModal = () =>{
        setShowModal(false)
    }
    const showMenuOn =() =>{
        setShowMenu(true)
    }
    const notShowMenu = () =>{
        setShowMenu(false)
    }
    let shareState ={allCars,showModal,showTheModal,notShowTheModal ,showMenu ,showMenuOn, notShowMenu}
    return (<AppContext.Provider value={shareState}>
        {children}
    </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}