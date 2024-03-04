import React from "react";
import Logo from "./logo.png";
import styled from "styled-components";

const HeaderEstilsa = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #c0e0bc;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Ul = styled.ul`
  cursor: pointer;
  color: #888888;
  font-size: 1.4rem;
  list-style: none;
  text-shadow: 2px 1px 2px grey;
  width: 42vw;
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;
`

const Img = styled.img`
  width: 13%;
`
const Vestidos = styled.li`
  color: #98d9b6;
   &:hover{
        color: 3d3c3c;
        text-shadow: 2px 1px 2px white;
   }
`
const Ternos = styled.li`
  color: #3ec9a7;
    &:hover{
        color: #3d3c3c;
        text-shadow: 2px 1px 2px white;
      }
`
const Bolsas = styled.li`
  color: #2b879e;
   &:hover{
        color: 3d3c3c;
        text-shadow: 2px 1px 2px white;
      }
`
const Acessorios = styled.li`
  color: #616668;
   &:hover{
        color: 3d3c3c;
        text-shadow: 1.5px 1px 1.5px white;
      }
`
const Kids = styled.li`
  color: #f2e8c4;
   &:hover{
        color: 3d3c3c;
        text-shadow: 1.5px 1px 1.5px white;
      }
`
function Header() {
  return (
    <HeaderEstilsa>
      <title>Aluguel de Roupas para Festa</title>
      <Nav>
        <Img src={Logo} alt="logo" />
        <Ul>
          <Vestidos>vestidos</Vestidos>
          <Ternos>ternos</Ternos>
          <Bolsas>bolsas</Bolsas>
          <Acessorios>acessórios</Acessorios>
          <Kids>kids</Kids>
        </Ul>
      </Nav>
    </HeaderEstilsa>
  );
}

export default Header;
