import React,{useContext, useState} from "react"
import { Contexto } from "../../../Services/Context/context"
import * as S from "./style"
export default function ModalProductComponent (){
    const {stateContext, activeModal} = useContext(Contexto)
    return(
        <>
            <ProductIndex />          
        </>
    )
}
const ProductIndex = () =>{
    const {products, productIndex} = useContext(Contexto)
    return(
        <S.ModalProduct>
            {products[productIndex.produtoId]}
            <CloseModalButton />
        </S.ModalProduct>
    )
}
const CloseModalButton = () => {
    const {activeModal} = useContext(Contexto)
    return <S.CloseButton onClick={()=>{activeModal()}}>Fechar</S.CloseButton>
}