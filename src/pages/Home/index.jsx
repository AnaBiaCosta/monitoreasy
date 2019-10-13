import React from 'react';
import {Link} from 'react-router-dom';
import { Line } from 'react-chartjs-2';


import Header from '../../componentes/Header'
import Totem from '../../componentes/Totem'
import Menu from '../../componentes/Menu'

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Home(){
    return <>
        <Header />
        <Menu />
        <h2>Sou a home</h2> 
        <Link to="/line/12">Ir para a linha</Link>
       <div style={{width:'400px', height:'200px'} }> <Line data={{
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]}} /></div>
    </>
}
