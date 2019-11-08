import React from 'react'
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import Botao from '../Button'
import './style.css'


//TODO: Arquivo de configuração
// Dicionário construído para trocar o status do totem
const dicionario = {
    disable: 'desabilitado',
    alert: 'ponto de atenção',
    danger: 'operação crítica',
    normal: 'operação normal'
}

function formatTime(time){
    return Math.floor(time / 1000) || 0 + ' min';
}

// pegando os valores enviados pelo backend
const Totem = ({ id, station, name, serialNumber, }) => {
    //mensagem exibida enquanto os dados são carregados
    const [data, setData] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    const {activeTime, status, cpu, memory, disk, memoryUnit, diskUnit, cpuUnit} = data || {};

    React.useEffect(() => {
        async function getData(){
            const res = await axios.get('http://localhost:4550/totems/data/'+id);
            setData(res.data.data[0]);
            console.log(res.data.data[0]);
            setLoading(false);
        }
        getData();
    }, [id]);

    // a partir do valr do status troca as cores dos totens

    return (
        // <div className={`totem-body ${status}`} >
            <div className="totem-body" >
                    <div>
                        <h3 className="totem-name">{name}</h3>

                        <div className="estado-container">
                            <div className={`icon ${status}`}></div>
                            <span className={`text ${status}`}>{dicionario[status]}</span>
                        </div>

                        <div className="totem-numbers">
                            {loading && <h3>Carregando...</h3>}
                            {!loading && <>
                                <p className="text-numbers">CPU: <span className={`number ${status}`}>{cpu || 0} {cpuUnit}</span></p>
                                <p className="text-numbers">Memória: <span className={`number ${status}`}>{memory || 0} {memoryUnit}</span></p>
                                <p className="text-numbers">Disco: <span className={`number ${status}`}>{disk || 0} {diskUnit}</span></p>
                            </>}
                        </div>
                    </div>

                    <div className="totem-information">
                        <div className="totem-identification">
                            <p className="text-bold mb">n° de série: <span className={`text-normal ${status}`}>{serialNumber}</span></p>
                            <p className="text-bold">tempo ativo: <span className={`text-normal ${status}`}>{formatTime(activeTime)}</span></p>
                        </div>


                        <Botao  href={`/totem/${id}`}text="+ detalhes" variant={status === 'disable' ? 'btn-disable' : 'primary'} />

                    </div>
        </div >
    )
}

export default withRouter(Totem)
