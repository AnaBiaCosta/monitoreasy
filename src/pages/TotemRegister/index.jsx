import React from 'react';
import Loading from '../../componentes/Loading';
import {Link, withRouter} from 'react-router-dom'
import './style.css'
import axios from 'axios';

import RegisterMenu from '../../componentes/RegisterMenu'
import CardRegister from '../../componentes/CardRegister'
import AlertCard from '../../componentes/AlertCard'

function TotemRegister({match : {params: { id}}}) {
    const [data, setData] = React.useState([{}])
    const [totem, setTotem] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function getData(){
            const res = await axios.get('http://localhost:4550/totems/data/list/'+id);
            const resTotem = await axios.get('http://localhost:4550/totems/view/'+id);
            setData(res.data.data);
            setTotem(resTotem.data.data[0]);
            console.log(res.data.data);
            console.log(resTotem.data.data[0]);
            setLoading(false);
        }
        getData();
    }, [id]);

    const {name, stationName, stationId} = totem;

    return <>
        <RegisterMenu stationId={stationId}/>

        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li>></li>
                <li><Link to={`/line/${stationId}`}>{stationName}</Link></li>
                <li>></li>
                <li><Link to={`/totem/${id}`}>{name}</Link></li>
                <li>></li>
                <li className="text-bold">Histórico de Registros</li>
            </ul>
        </nav>

        <Loading is={loading}>Carregando dados do totem...</Loading>
        {!loading && <div className="container">
            <div className="cards-container">
                <CardRegister cardName="CPU"/>
                <CardRegister cardName="Memória"/>
                <CardRegister cardName="Disco"/>
                <CardRegister cardName="Processos"/>
            </div>
            <AlertCard cardName="Histórico de alertas"/>
        </div>}
    </>
}
export default withRouter(TotemRegister);
