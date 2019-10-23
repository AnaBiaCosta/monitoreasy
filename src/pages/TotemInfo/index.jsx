import React from 'react';
import {Link} from 'react-router-dom'

import Header from '../../componentes/Header'
import '../TotemInfo/style.css'

import {Doughnut} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'
import {Bar} from 'react-chartjs-2';

import CurrentStatus from '../../componentes/CurrentStatus'

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

const dataBar = {
    labels: ['19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:36'],
    datasets: [
      {
        label: 'Disco utilizado em %',
        backgroundColor: '#82B1FF',
        borderColor: '#004D40',
        borderWidth: 1,
        hoverBackgroundColor: '#82B1FF',
        hoverBorderColor: '#004D40',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

var dataMem = {
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
    /*
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
    }*/
};

const dataCPU = {
    labels: ['19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:36'],
    datasets: [
      {
        label: 'CPU em GHz',
        fill: false,
        lineTension: 0.01,
        backgroundColor: '#01579B',
        borderColor: '#01579B',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };


export default function Home() {
    return <>
        <Header />
        <nav>
            <ul>
                <li><Link to="/">início</Link></li>
                <li>></li>
                <li><Link to="/line/3">estação santana</Link></li>
                <li>></li>
                <li className="text-bold"><Link to="/toteminfo">STN 01</Link></li>
            </ul>
        </nav>

        <div class="containerTotem">
            <CurrentStatus />
            <div className="item-chart">
                <p class="chart-title">CPU</p>
                <Line data={dataCPU} />
	        </div>
            
            <div className="item-chart">
                <p class="chart-title">Disco</p>
                <Bar
          data={dataBar}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
	        </div>

            <div className="item-chart">
                <p class="chart-title">Memória</p>
                <Doughnut data={dataMem} />
	        </div>
        </div>
        
    </>
}


