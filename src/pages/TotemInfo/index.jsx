import React from 'react';

import Header from '../../componentes/Header'
import Menu from '../../componentes/Menu'

import CurrentStatus from '../../componentes/CurrentStatus'

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Home(){
    return <>
        <Header />
        <Menu />
        <CurrentStatus/>
    </>
}
