import React from 'react';

import Header from '../../componentes/Header'
import MetroMap from '../../componentes/MetroMap'
import Menu from '../../componentes/Menu'

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Home(){
    return <>
        <Header />
        <Menu />
        <MetroMap/>
    </>
}
