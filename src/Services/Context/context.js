import React, {createContext, useState} from "react"
import { produtos } from "../Data/products.js/productData"
export const Contexto = createContext()
export default function ContextProvider ({children}){
    const [stateContext, setStateContext] = useState(produtos)
    return(
        <Contexto.Provider value={{stateContext, setStateContext}}>
            {children}
        </Contexto.Provider>
    )
}