import React from "react"
import * as S from "./style"

const NavBarComponent = () => <NavBarListComponent />
export default NavBarComponent;
export const NavBarListComponent = () => (
    <S.NavBar>
         <S.NavBarList>
            <S.NavBarListItem>Início</S.NavBarListItem>
            <S.NavBarListItem>Produtos</S.NavBarListItem>
            <S.NavBarListItem>Contatos</S.NavBarListItem>
            <S.NavBarListItem>Sobre</S.NavBarListItem>
        </S.NavBarList>
    </S.NavBar>
)