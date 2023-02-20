import React from "react";
import SearchBarComponent from "../SearchBarComponent /SearchBar"
import NavBarComponent from "./NavBar";
import * as S from "./style";
export default function HeaderComponent(){
    return(
        <S.HeaderStyle>
            <NavBarComponent />
            <SearchBarComponent />
        </S.HeaderStyle>
    )
}