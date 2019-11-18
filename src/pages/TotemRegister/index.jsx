import React from 'react';
import Loading from '../../componentes/Loading';
import {Link, withRouter} from 'react-router-dom'
import './style.css'
import axios from 'axios';

import RegisterMenu from '../../componentes/RegisterMenu'
import CardRegister from '../../componentes/CardRegister'
import AlertCard from '../../componentes/AlertCard'

function TotemRegister({match : {params: { id}}}) {
    const [totem, setTotem] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function getData(){
            const res = await axios.get(`http://localhost:4550/totem/${id}`);
            if(res.status === 200) setTotem(res.data);
            console.log(res.data);
            setLoading(false);
        }
        getData();
    }, [id]);

    const {name, station: {name: stationName, id: stationId} = {}} = totem;

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
                <CardRegister type="cpu" cardName="CPU" totem={totem}/>
                <CardRegister  type="memory" cardName="Memória" totem={totem}/>
                {/*<CardRegister cardName="Disco" totem={totem}/>*/}
                {/*<CardRegister cardName="Processos" totem={totem}/>*/}
            </div>
            <AlertCard cardName="Histórico de alerta" totem={totem}/>
        </div>}
    </>
}
export default withRouter(TotemRegister);
