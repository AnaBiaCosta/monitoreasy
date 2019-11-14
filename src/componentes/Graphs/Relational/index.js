import React from 'react';
import {Line} from 'react-chartjs-2'
const config = {
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
}

const generate = (label, data, max, time=[1,2,3]) =>( {
    labels: time,
    datasets: [
        { ...config, label, data, },
        { ...config, label: 'Média', 
            data: new Array(data.length)
            .fill(Math.floor(data.reduce((curr, i) => curr + i, 0) / data.length)),
        },
        { ...config, label: 'Crítico', 
            data: new Array(data.length).fill(70),
        },
    ]
  });

export default function Graph({label, data}){
    return <Line data={generate( label, data)}/>
}
