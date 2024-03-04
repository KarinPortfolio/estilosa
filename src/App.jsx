import React from 'react'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`
function App() {

  return (
    <>   
     <GlobalStyle/>   
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App
