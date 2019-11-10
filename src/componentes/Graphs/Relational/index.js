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

const generate = (label, data) =>( {
    labels: ['19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:36'],
    datasets: [
        { ...config, label, data, },
    ]
  });

export default function Graph({label, data}){
    return <Line data={generate( label, data)}/>
}
