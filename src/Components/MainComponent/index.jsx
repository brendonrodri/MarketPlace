import React from "react"
import { Contexto } from "../../Services/Context/context"
import { produtos } from "../../Services/Data/products.js/productData"
import ModalProductComponent from "../Modals/ProductModal"
import * as S from "./style"
export default function MainComponent  (){
    const {modal, setModal,handleProduct} = React.useContext(Contexto)
    return(
    <S.ProductContainer> 
        <S.ProductList> 
            {modal && ModalProductComponent()}
            {produtos.map((item)=>(
                <S.ProductCard  
                onMouseEnter={()=>{
                    handleProduct(item.value)
                }}
                onClick={()=>{
                    if(modal===false){
                        setModal(true)
                    }else{
                        setModal(false)
                    }
                }}
                key={item.value}>
                    <p>{item.name}</p>
                    <p>{item.caracteristica}</p>
                </S.ProductCard>
            ))}
        </S.ProductList>
    </S.ProductContainer>
  )
}