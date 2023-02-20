import styled from "styled-components";

export const ProductBox = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
`
export const ProductDescription = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    h2{
        margin-top: 0.8rem;
    }
    p{
        width: 90%;
        margin: 2rem 0;
        text-align: justify;
    }
`
export const ProductImageBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    img{
        width: 60%;
    }
`