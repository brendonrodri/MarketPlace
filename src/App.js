import React, {useState} from "react"
export default function App (){

  //primeiro criamos uma array de objetos com cada um dos nosso produtos, contendo nome, caracteristica e nosso valor
  //que será a informação necessária para sabermos qual produto sera exibido na tela
  const produtos = [
    {
      name: "Produto 1",
      caracteristica: "Cor azul",
      value: "produto1",
    },
    {
      name: "Produto 2",
      caracteristica: "Cor preta",
      value: "produto2",
    },
    {
      name: "Produto 3",
      caracteristica: "Cor azul e preta",
      value: "produto3",
    },
  ];

  //criamos um estado que será alterado a cada click do botão
  // esse estado recebe um objeto e o objeto receberá como valor a nossa chave, que é o próprio value do produto
  const [state, setState] = useState({
    produtoState: "produto1"
  })

  //função que altera o nosso estado
  // recebe um parâmetro e para esse parâmetro é passado o valor atual da nossa chave
  const handleProduct = produto => setState({produtoState: produto})
  return(
    <> 
    {/* aqui temos um map, que irá redenrizar nossa lista de produtos e cada produto recebéra como valor da chave
        seu próprio value
        cada produto possui um botão com uma função onde seu argumento é o valor do produto
        ou seja, quando eu clicar em um botão, indepente de qual, meu estado irá receber o valor do produto a qual
        esse botão faz parte
    */}
      {produtos.map((item)=>(
        <div key={item.value}>
          <p>{item.name}</p>
          <p>{item.caracteristica}</p>
          <button onClick={()=>{
            handleProduct(item.value)
          }}>Mudar produto</button>
        </div>
      ))}
      <div>
        <h2> Informações do Produto</h2>
        {/* Aqui redenrizamos o produto selecionado
            Chamamos um objeto que recebe nossso componentes
            depois passamos o estado do nosso valor como index
            alterando qual componente será redenrizado de acordo com o estado atual
        */}
        <div>
          {infoProdutos[state.produtoState]}
        </div>
      </div>
    </>
  )
}
const Produto1 = () => {
  return (
    <>
      <p>
        <b>Produto 1</b> Lorem ipsum dolor sit amet. Est sint explicabo est
        fugiat repudiandae aut commodi dolorem et consequatur aperiam rem
        incidunt voluptatem est reiciendis cumque vel consequatur tempora!{" "}
      </p>
      <img src="https://cdn-icons-png.flaticon.com/512/4247/4247872.png" alt="TV azul" />
    </>
  );
};

const Produto2 = () => {
  return (
    <>
      <p>
        <b>Produto 2</b> Aut tempore enim et optio suscipit ad quia
        perspiciatis non adipisci commodi est harum exercitationem ea quam
        amet. In dolor debitis qui laborum accusamus 33 quaerat porro id
        quisquam exercitationem
      </p>
      <img src="https://cdn-icons-png.flaticon.com/512/4247/4247865.png" alt="TV preta" />
    </>
  );
};

const Produto3 = () => {
  return (
    <>
      <p>
        <b>Produto 3</b> Et adipisci nesciunt hic voluptatem quos aut
        voluptates quisquam ea placeat exercitationem non sint tempore est
        repellat voluptatem. Qui quae itaque sed rerum voluptas et maiores
        quia non rerum dicta et possimus sunt quo dolorum tempora est eius
        similique.
      </p>
      <img src="https://cdn-icons-png.flaticon.com/512/4247/4247902.png" alt="TV azul e preta" />
    </>
  );
};

const infoProdutos = {
  produto1: <Produto1 />,
  produto2: <Produto2 />,
  produto3: <Produto3 />
}