import React, {createContext, useState} from "react"
import { produtos } from "../Data/products.js/productData"
export const Contexto = createContext()
export default function ContextProvider ({children}){
    const [stateContext, setStateContext] = useState(produtos)
    const [modal, setModal] = useState(false)
    const activeModal = () =>{
        setModal(false)
    }
    return(
        <Contexto.Provider value={{stateContext, setStateContext, modal, setModal, activeModal}}>
            {children}
        </Contexto.Provider>
    )
}