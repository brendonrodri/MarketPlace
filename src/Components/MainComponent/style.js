import styled from "styled-components";

export const ProductContainer = styled.section`
    width: 80vw;
    margin: 0 auto;
    background-color: blue;
    font-family:'Roboto', sans-serif;
`
export const ProductList = styled.section`
    display: flex;
    height: 30vh;
    justify-content: space-evenly;
    align-items: center;
`
export const ProductCard = styled.div`
    width: 20%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:  2px solid;
    border-radius: 1rem;
    transition-duration: 300ms;
    :hover{
        transform: scale(1.1)
    }

`
export const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
`