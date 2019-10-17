import React from 'react';

import Header from '../../componentes/Header'
import Menu from '../../componentes/Menu'
import '../TotemInfo/style.css'

import CurrentStatus from '../../componentes/CurrentStatus'

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Home() {
    return <>
        <Header />
        <Menu />
        <div class="containerTotem">
            <CurrentStatus />
            <div className="item">
            <img src="https://aws1.discourse-cdn.com/elastic/original/2X/5/5142ad613f9ce060017b1cc2c8ca0a8dfccbc4fe.png" alt="grafico 1"/>
            </div>
            <div className="item">
            <img src="https://aws1.discourse-cdn.com/elastic/original/2X/5/5142ad613f9ce060017b1cc2c8ca0a8dfccbc4fe.png" alt="grafico 2"/>
            </div>
            <div className="item">
            <img src="https://aws1.discourse-cdn.com/elastic/original/2X/5/5142ad613f9ce060017b1cc2c8ca0a8dfccbc4fe.png" alt="grafico 3"/>
            </div>
        </div>
    </>
}
