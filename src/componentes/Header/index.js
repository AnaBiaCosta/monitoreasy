import React from 'react'
import Botao from '../Button'
import './style.css'

const Header = ({title, desc, color = "#333"}) => (
    <header style={{backgroundColor: color}}>
        <h1>{title} <span className="title">{desc}</span></h1>
        <Botao text='sair' variant="primary"/>
    </header>
) 
  
export default Header
