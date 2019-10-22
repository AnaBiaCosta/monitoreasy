import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'



import RegisterMenu from '../../componentes/RegisterMenu'
import CardRegister from '../../componentes/CardRegister'
import AlertCard from '../../componentes/AlertCard'

export default function TotemRegister() {
    return <>
        <RegisterMenu />

        <nav>
            <ul>
                <li><Link to="/">início</Link></li>
                <li>></li>
                <li><Link to="/line">estação santana</Link></li>
                <li>></li>
                <li><Link to="/toteminfo">STN 01</Link></li>
                <li>></li>
                <li className="text-bold"><Link to="/totemregister">histórico de registros</Link></li>
            </ul>
        </nav>

        <div className="container">
            <div className="cards-container">
                <CardRegister cardName="CPU"/>
                <CardRegister cardName="Memória"/>
                <CardRegister cardName="Disco"/>
                <CardRegister cardName="Processos"/>
            </div>
            <AlertCard cardName="Histórico de alertas"/>
        </div>
    </>
}