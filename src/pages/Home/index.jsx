import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../componentes/Header'
import Totem from '../../componentes/Totem'
import Menu from '../../componentes/Menu'

export default function Home(){
    return <>
        <Header />
        <Menu />
        <h2>Sou a home</h2> 
        <Link to="/line/12">Ir para a linha</Link>
    </>
}
