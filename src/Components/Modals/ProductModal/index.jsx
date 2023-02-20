import React,{useContext,} from "react"
import { Contexto } from "../../../Services/Context/context"
import * as S from "./style"
export default function ModalProductComponent (){
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