import React, {createContext, useState} from "react"
import { produtos, infoProdutos, productId } from "../Data/products.js/productData"
export const Contexto = createContext()
export default function ContextProvider ({children}){
    const [stateContext, setStateContext] = useState(produtos)
    const [products, setProducts] = useState(infoProdutos)
    const [modal, setModal] = useState(false)
    const [productIndex, setProductIndex] = useState(productId)
    const handleProduct = produto => setProductIndex({produtoId: produto})
    const activeModal = () => setModal(!activeModal)
    return(
        <Contexto.Provider value={{
            stateContext,
            setStateContext,
            modal,
            setModal,
            activeModal,
            products,
            setProducts,
            productIndex,
            setProductIndex,
            handleProduct
        }}>
            {children}
        </Contexto.Provider>
    )
}