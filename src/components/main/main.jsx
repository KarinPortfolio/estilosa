import React from 'react'
import Roupas1 from './vestido.jpg'
import Roupas2 from './terno.jpg'
import Roupas3 from './bolsas.jpg'
import Roupas4 from './acessorios.jpg'
import Roupas5 from './kids.jpg'
import styled from 'styled-components'

const conteudoMain = styled.main`
display: flex;
height: 78vh;   
    justify-content: center;
    align-items: center;
`
const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 2rem;
padding-bottom: 4rem;
` 

const Img = styled.img` 
  height: 50vh;
  padding: 0.5rem;
`
function Main() {
  return (
    <conteudoMain>   
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem et, cum accusamus a ex, labore minus nesciunt possimus ipsum nisi temporibus! Eius minima ducimus, iusto accusamus dolores inventore debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius obcaecati minus ducimus, magni iusto nemo animi magnam, aliquam odit esse veritatis, quaerat pariatur explicabo cumque cum possimus tenetur voluptate.</p>   
      <Div>
      <Img src={Roupas1} alt="vestidos"/>
      <Img src={Roupas2} alt="ternos"/>
      <Img src={Roupas3} alt="bolsas"/>
      <Img src={Roupas4} alt="acessorios"/>
      <Img src={Roupas5} alt="kids"/>
      </Div>      
      </conteudoMain>      
  )
}

export default Main