import React from 'react';
import {Link} from 'react-router-dom'

import Header from '../../componentes/Header'
import MetroMap from '../../componentes/MetroMap'

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Home() {
    return <>
        <Header title="Escolha" desc="sua estação" />

        <nav>
            <ul>
                <li className="text-bold"><Link to="/">início</Link></li>
            </ul>
        </nav>


        <MetroMap />
    </>
}
