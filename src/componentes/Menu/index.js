import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Menu = ({info}) => (
    <nav>
        <ul>
            <li><Link to="/">{info}</Link></li>
        </ul>
    </nav>
)

export default Menu
