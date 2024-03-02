import React from 'react'
import Logo from './logo.png'
import styled from 'styled-components'

const HeaderEstilsa = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 
  background-color: #e6e6e6;
`
const Nav = styled.nav`
  display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    align-items: center;
`
const Img = styled.img`
  width: 13%;
`
const Vestidos = styled.li`
  color: #98d9b6;
`
const Ternos = styled.li`
  color: #3ec9a7;
`
const Bolsas = styled.li`
  color: #2b879e;
`
const Acessorios = styled.li`
  color: #616668;
`
const Kids = styled.li`
  color: #f2e8c4;
`
function Header() {
  return (
    <HeaderEstilsa>
    <title>Aluguel de Roupas para Festa</title>
      <Nav>
      <Img src={Logo} alt="logo"/>
      <Ul>
          <Vestidos>vestidos</Vestidos>
          <Ternos>ternos</Ternos>
          <Bolsas>bolsas</Bolsas>
          <Acessorios>acessórios</Acessorios>
          <Kids>kids</Kids>
        </Ul>
      </Nav>
      </HeaderEstilsa>   

      
  )
}

export default Header
