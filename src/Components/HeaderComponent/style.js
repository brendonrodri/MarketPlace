import styled from "styled-components";
export const HeaderStyle = styled.header`
    display: flex;
    height: 30vh;
    flex-direction: column;
    align-items: center;
    background: #4ECDC4;
    font-family: 'Roboto', sans-serif;
`
export const NavBar = styled.nav`
    display: flex;
    height: 20vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #fff;
    position: relative;
    top: 15%;
`
export const NavBarList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
`
export const NavBarListItem = styled.li`
    font-size: 2.3rem;
    font-weight: 300;
    list-style: none;
    a{
        text-decoration: none;
    }
    :hover{
        text-decoration: underline;
        text-decoration-color: #FF6B6B;
    }
`