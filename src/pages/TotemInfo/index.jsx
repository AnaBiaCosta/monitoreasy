import React from 'react';

import Header from '../../componentes/Header'
import Menu from '../../componentes/Menu'
import '../TotemInfo/style.css'
//import '../TotemInfo/charts.js'
import {Doughnut} from 'react-chartjs-2'

import CurrentStatus from '../../componentes/CurrentStatus'

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var config = {
    type: 'doughnut',
    labels: ["Em uso", "Disponível"],
    datasets: [{
        data: [
            10,
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#D3D3D3",
            "#00C853",
        ],
        label: 'Memória'
    }],
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Memória',
            
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};



// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Home() {
    return <>
        <Header />
        <Menu />
        <div class="containerTotem">
            <CurrentStatus />
            <div id="canvas-holder">
                <p>Memória</p>
                <Doughnut data={config} />
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


