import React,{useContext, useState} from "react"
import { Contexto } from "../../../Services/Context/context"
import * as S from "./style"
export default function ModalProductComponent (){
    const {stateContext, setStateContext, activeModal} = useContext(Contexto)
    console.log('console do modal ', stateContext)
    const ProductIndex = () =>{
    
        return(
            <S.ModalProduct>
                <p>{stateContext.slice(0,1).map((item)=>(
                    <>{item.name}</>
                ))}</p>
                <button 
                onClick={()=>{
                    activeModal()
                }}>
                    Fechar</button>
            </S.ModalProduct>
        )
    }
    return(
        <>
           <ProductIndex />
        </>
    )
}