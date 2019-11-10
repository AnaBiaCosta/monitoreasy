import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loading from '../../componentes/Loading';
import Header from '../../componentes/Header'
import '../TotemInfo/style.css'

import MemoryPie from '../../componentes/Graphs/MemoryPie';
import Relational from '../../componentes/Graphs/Relational';

import {Line} from 'react-chartjs-2'
import {Bar} from 'react-chartjs-2';

import CurrentStatus from '../../componentes/CurrentStatus'

export default function TotemInfo({match : {params: { id}}}) {
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
            console.log(resTotem.data.data);
            setLoading(false);
        }
        getData();
        setInterval(getData, 30000);
    }, [id]);

    const {name = 'Carregando...', stationId,stationName = 'Carregando...'} = totem || {};
    const [{cpu: lastCpu, memory: lastMemory, disk: lastDisk, avaliableMemory} = {}] = data || [];

    return <>
        <Header title={stationName} desc={' - ' + name} />
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li>></li>
                <li><Link to={`/line/${stationId}`}>{stationName}</Link></li>
                <li>></li>
                <li className="text-bold"><Link to="/toteminfo">{name}</Link></li>
            </ul>
        </nav>

        <Loading is={loading}>Carregando dados do totem...</Loading>

        {!loading &&
            <div class="containerTotem">

            <CurrentStatus id={id} cpu={lastCpu} memory={lastMemory} disk={lastDisk}/>

            <div className="item-chart">
                <p class="chart-title">Memória</p>
                <MemoryPie lastMemory={lastMemory} avaliableMemory={avaliableMemory}/>
	        </div>

 
            <div className="item-chart">
                <p class="chart-title">CPU</p>
                <Relational label="CPU" data={data.map(i => i.cpu)}/>
	        </div>
            <div className="item-chart">
                <p class="chart-title">RAM</p>
                <Relational label="RAM" data={data.map(i => i.memory)}/>
	        </div>
            <div className="item-chart">
                <p class="chart-title">Disco</p>
                <Relational label="Disco" data={data.map(i => i.disk)}/>
	        </div>

        </div>}
        
    </>
}
