import React from 'react'
import './style.css'

const Botao = ({ text, variant = 'primary' }) => (
    <div className={variant} >
        <button>{text}</button>
    </div>
)

export default Botao 
