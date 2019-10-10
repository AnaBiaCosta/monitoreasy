import React from 'react'
import Botao from '../Button'
import './style.css'

const Header = () => (
    <header>
        <h1>Linha 1 - <span className="title">Estação Santana</span></h1>
        <Botao text='sair' variant='normal'/>
    </header>
) 
  
export default Header
