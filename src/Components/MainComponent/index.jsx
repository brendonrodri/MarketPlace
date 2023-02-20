import React, {useState} from "react"
import { Contexto } from "../../Services/Context/context"
import { produtos } from "../../Services/Data/products.js/productData"
import { Produto1, Produto2, Produto3 } from "../ProductsComponents/index"
import * as S from "./style"
export default function MainComponent  (){
    const {stateContext, setStateContext} = React.useContext(Contexto)
    console.log(stateContext)
  //primeiro criamos uma array de objetos que está sendo importa com cada um dos nosso produtos, contendo nome, caracteristica e nosso valor
  //que será a informação necessária para sabermos qual produto sera exibido na tela
  //criamos um estado que será alterado a cada click do botão
  // esse estado recebe um objeto e o objeto receberá como valor a nossa chave, que é o próprio value do produto
  const [state, setState] = useState({
    produtoState: ""
  })
  //função que altera o nosso estado
  // recebe um parâmetro e para esse parâmetro é passado o valor atual da nossa chave
  const handleProduct = produto => setState({produtoState: produto})
  const resetState = () => setState({produtoState: ""})

  //objeto que guarda nossos componentes para serem redenrizados de acordo com o valor do atual do estado
  const infoProdutos = {
    produto1: <Produto1 />,
    produto2: <Produto2 />,
    produto3: <Produto3 />
  }
  return(
    <S.ProductContainer onClick={()=>{
        resetState()
    }}> 
        {/* aqui temos um map, que irá redenrizar nossa lista de produtos e cada produto recebéra como valor da chave
            seu próprio value
            cada produto possui um botão com uma função onde seu argumento é o valor do produto
            ou seja, quando eu clicar em um botão, indepente de qual, meu estado irá receber o valor do produto a qual
            esse botão faz parte
        */}
        <S.ProductList> 
            {produtos.map((item)=>(
                <S.ProductCard  onMouseEnter={()=>{
                    handleProduct(item.value)
                }} key={item.value}>
                    <p>{item.name}</p>
                    <p>{item.caracteristica}</p>
                    <button >Mudar produto</button>
                </S.ProductCard>
            ))}
        </S.ProductList>
        <S.ProductContainer>
            {/* Aqui redenrizamos o produto selecionado
                Chamamos um objeto que recebe nossso componentes
                depois passamos o estado do nosso valor como index
                alterando qual componente será redenrizado de acordo com o estado atual
            */}
            <>
            {infoProdutos[state.produtoState]}
            </>
        </S.ProductContainer>
    </S.ProductContainer>
  )
}