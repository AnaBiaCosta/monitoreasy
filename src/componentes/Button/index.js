import React from 'react'
import './style.css'

const Botao = ({ text, variant}) => (
    <div className={`button ${variant}`} >
        <button>{text}</button>
    </div>
)

export default Botao 
