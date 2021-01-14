import {createContext, useContext} from 'react'
import {allCars} from '../data/allCars'
const AppContext = createContext()

export function AppWraper({ children}){
    let shareState ={allCars}
    return (<AppContext.Provider value={shareState}>
        {children}
    </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}