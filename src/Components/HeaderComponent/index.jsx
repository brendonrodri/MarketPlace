import React from "react";
import NavBarComponent from "./NavBar";
import * as S from "./style";
export default function HeaderComponent(){
    return(
        <S.HeaderStyle>
            <NavBarComponent />
        </S.HeaderStyle>
    )
}