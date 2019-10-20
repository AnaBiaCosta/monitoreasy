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
                <CardRegister statusColor="danger" percent="94%" dateTime="12/03/13 - 12:00:30" details="line text lorem ipsum " />
                <CardRegister />
                <CardRegister />
                <CardRegister />
            </div>
            <AlertCard/>
        </div>
    </>
}