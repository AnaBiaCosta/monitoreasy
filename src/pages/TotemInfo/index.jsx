import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loading from '../../componentes/Loading';
import Header from '../../componentes/Header'
import '../TotemInfo/style.css'

import {Doughnut} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'
import {Bar} from 'react-chartjs-2';

import CurrentStatus from '../../componentes/CurrentStatus'

const dataBar = (data) => ({
    labels: ['19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:36'],
    datasets: [
      {
        label: 'Disco utilizado em %',
        backgroundColor: '#82B1FF',
        borderColor: '#004D40',
        borderWidth: 1,
        hoverBackgroundColor: '#82B1FF',
        hoverBorderColor: '#004D40',
        data,
      }
    ]
  });
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

const dataCPU = (data) =>( {
    labels: ['19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:36'],
    datasets: [
      {
        label: 'CPU em GHz',
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
        data,
      }
    ]
  });

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
    }, [id]);

    const {name = 'Carregando...', stationName = 'Carregando...'} = totem || {};
    const [{cpu: lastCpu, memory: lastMemory, disk: lastDisk, avaliableMemory} = {}] = data || [];

    return <>
        <Header title={stationName} desc={' - ' + name} />
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li>></li>
                <li><Link to="/line/3">{stationName}</Link></li>
                <li>></li>
                <li className="text-bold"><Link to="/toteminfo">{name}</Link></li>
            </ul>
        </nav>

        <Loading is={loading}>Carregando dados do totem...</Loading>
        {!loading && <div class="containerTotem">
            <CurrentStatus id={id} cpu={lastCpu} memory={lastMemory} disk={lastDisk}/>
            <div className="item-chart">
                <p class="chart-title">CPU</p>
                <Line data={dataCPU(data.map(d => d.cpu))} />
	        </div>
            
            <div className="item-chart">
                <p class="chart-title">Disco</p>
                <Bar
                    data={dataBar(data.map(d => d.cpu))}
                    width={100}
                    height={50}
                    options={{
                maintainAspectRatio: false
          }}
        />
	        </div>

            <div className="item-chart">
                <p class="chart-title">Memória</p>
                <Doughnut data={dataMem([lastMemory, avaliableMemory])} />
	        </div>
        </div>}
        
    </>
}
