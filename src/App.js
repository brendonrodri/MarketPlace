import React from "react"
import HeaderComponent from "./Components/HeaderComponent"
import MainComponent from "./Components/MainComponent"
import ContextProvider from "./Services/Context/context"
import { GlobalStyle } from "./Services/GlobalStyle"
export default function App (){
    return(
      <ContextProvider> 
        <GlobalStyle />
        <HeaderComponent />
        <MainComponent />
      </ContextProvider>
    )
}