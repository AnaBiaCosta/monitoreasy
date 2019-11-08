import React from 'react'
import {Link} from 'react-router-dom';
import './style.css'

const Botao = ({ text, href, variant}) => (
    <Link to={href} className={`button ${variant}`} >
        <button>{text}</button>
    </Link>
)

export default Botao 
