import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../componentes/Header'

import axios from 'axios';


function TempTotem({id, color, name}){
    return <div style={{color: color}}>{name} id: {id}
        <Link to={`/totem/${id}`}>Mais detalhes</Link>
    </div>;
}

// Exemplo com outros gráficos: 
// https://github.com/jerairrest/react-chartjs-2
export default function Teste(){
    const [lines, setLines] = React.useState([]);

    React.useEffect(() => {
        async function getLines(){
            const res = await axios.get('http://apimonitoreasy.herokuapp.com/lines/list');
            setLines(res.data.data);
            console.log(res.data);
        }
        getLines();
        
    }, []);

    return <>
        <Header />
     
        <h2>teste</h2> 
        {lines.map(line => <TempTotem color={line.color} name={line.name} id={line.id}/>)}
    </>
}
