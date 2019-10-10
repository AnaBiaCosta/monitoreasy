import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Menu = () => (
    <nav>
        <ul>
            <li><Link to="/">Início</Link></li>
        </ul>
    </nav>
)

export default Menu
