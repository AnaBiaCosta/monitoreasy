import React from 'react';
import {Line} from 'react-chartjs-2'
const config = (color, fill=false) => ({
        fill,
        lineTension: 0.01,
        backgroundColor: `${color}77`,
        borderColor: `${color}`,
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
})

const generate = (label, data, time) =>( {
    labels: time,
    datasets: [
        { ...config('#0250a5', true), label, data, },
        { ...config('#00805c'), label: 'Média', 
            data: new Array(data.length)
            .fill(Math.floor(data.reduce((curr, i) => curr + i, 0) / data.length)),
        },
        { ...config('#fa3d17'), label: 'Crítico', 
            data: new Array(data.length).fill(70),
        },
    ]
  });

export default function Graph({label, data, time}){
    return <Line data={generate( label, data, time)}/>
}
