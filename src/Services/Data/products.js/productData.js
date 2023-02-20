import { Produto1, Produto2, Produto3 } from "../../../Components/ProductsComponents";
export const produtos = [
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
  export const infoProdutos = {
    produto1: <Produto1 />,
    produto2: <Produto2 />,
    produto3: <Produto3 />
  }
  export const productId = {
    productId: ""
  }