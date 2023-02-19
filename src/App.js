import React from "react"
import HeaderComponent from "./Components/HeaderComponent"
import MainComponent from "./Components/MainComponent"
import { GlobalStyle } from "./Services/GlobalStyle"

export default class App extends React.Component{
  render(){
    return(
      <> 
        <GlobalStyle />
        <HeaderComponent />
        <MainComponent />
      </>
    )
  }
}