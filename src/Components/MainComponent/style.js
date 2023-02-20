import styled from "styled-components";

export const ProductContainer = styled.section`
    width: 80vw;
    margin: 0 auto;
    background-color: blue;
    font-family:'Roboto', sans-serif;
`
export const ProductList = styled.section`
    display: flex;
    height: 50vh;
    justify-content: space-evenly;
    align-items: center;
`
export const ProductCard = styled.div`
    width: 20%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 1px 2px 3px 1px #fff;
    transition-duration: 300ms;
    :hover{
        transform: scale(1.1)
    }

`
export const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
`