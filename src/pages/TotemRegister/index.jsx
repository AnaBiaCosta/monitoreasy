import React from 'react';
import { Link } from 'react-router-dom';


import './style.css'


import RegisterMenu from '../../componentes/RegisterMenu'
import Menu from '../../componentes/Menu'
import CardRegister from '../../componentes/CardRegister'
import AlertCard from '../../componentes/AlertCard'

export default function TotemRegister() {
    return <>
        <RegisterMenu />
        <Menu />
        <div className="container">
            <div className="cards-container">
                <CardRegister cardName="CPU"/>
                <CardRegister cardName="Memória"/>
                <CardRegister cardName="Disco"/>
                <CardRegister cardName="Processos"/>
            </div>
            <AlertCard/>
        </div>
    </>
}