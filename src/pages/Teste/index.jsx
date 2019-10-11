import React from 'react';

import Header from '../../componentes/Header'
import Menu from '../../componentes/Menu'

import axios from 'axios';

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Teste(){
    const [lines, setLines] = React.useState([]);

    React.useEffect(() => {
        async function getLines(){
            const res = await axios.get('http://localhost:4550/lines/list');
            setLines(res.data.data);
            console.log(res.data);
        }
        getLines();
        
    }, []);

    return <>
        <Header />
        <Menu />
        <h2>teste</h2> 
        {lines.map(line => <div style={{color: line.color}}>{line.name}</div>)}
    </>
}
