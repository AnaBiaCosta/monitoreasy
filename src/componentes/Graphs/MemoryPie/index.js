import React from 'react';
import {Doughnut} from 'react-chartjs-2'

var dataMem =  (data) => ({
    type: 'doughnut',
    labels: ["Em uso", "Disponível"],
    datasets: [{
        data,
        backgroundColor: [
            "#D3D3D3",
            "#00C853",
        ],
        label: 'Memória'
    }],
});

export default function Graph({lastMemory, avaliableMemory}){
    return <Doughnut data={dataMem([lastMemory, avaliableMemory])} />
}
