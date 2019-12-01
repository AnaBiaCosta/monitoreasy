import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loading from '../../componentes/Loading';
import Header from '../../componentes/Header'
import '../TotemInfo/style.css'

import MemoryPie from '../../componentes/Graphs/MemoryPie';
import Relational from '../../componentes/Graphs/Relational';

import CurrentStatus from '../../componentes/CurrentStatus'

export default function TotemInfo({match : {params: { id}}}) {
    const [totem, setTotem] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function getData(){
            const res = await axios.get(`http://apimonitoreasy.herokuapp.com/totem/${id}`);
            if(res.status === 200) setTotem(res.data);
            setLoading(false);
        }
        getData();
        setInterval(getData, 30000);
    }, [id]);

    const {
        name = 'Carregando...',
        station : {
            id: stationId,
            name: stationName = 'Carregando...',
        } = {},
        line: {
            color = "#333",
        } = {},
        registers = [{}],
    } = totem;

    const [{
        cpu: lastCpu,
        memory: lastMemory,
        disk: lastDisk,
        avaliableMemory,
        cpuUnit,
        memoryUnit,
    }] = registers;

    return <>
        <Header color={color} title={stationName} desc={' - ' + name} />
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

            <CurrentStatus id={id} cpu={lastCpu} memory={lastMemory} cpuUnit={cpuUnit} memoryUnit={memoryUnit}/>

            <div className="item-chart">
                <p class="chart-title">Memória</p>
                <MemoryPie lastMemory={lastMemory} avaliableMemory={avaliableMemory}/>
	        </div>

            <div className="item-chart">
                <p class="chart-title">CPU</p>
                <Relational label="CPU" 
                    data={registers.map(i => i.cpu).reverse()}
                    time={registers.map(i => new Date(i.moment).toLocaleDateString()).reverse()}
                />
	        </div>
            <div className="item-chart">
                <p class="chart-title">RAM</p>
                <Relational label="RAM" 
                    data={registers.reverse().map(i => i.memory).reverse()}
                    time={registers.reverse().map(i => new Date(i.moment).toLocaleDateString()).reverse()}
                />
	        </div>

        </div>}
        
    </>
}
