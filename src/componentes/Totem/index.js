import React from 'react'
import {withRouter} from 'react-router-dom';
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

function formatTime(time, status){
    if(status == 'disable')
        return 'desligado';
    return Math.floor(time / 1000) || 1 + ' min';
}

const Totem = ({ id, station, name, serialNumber, }) => {
    const [totem, setTotem] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    const {activeTime, status, cpu, memory, memoryUnit, cpuUnit} = totem;

    React.useEffect(() => {
        async function getData(){
            const res = await axios.get(`http://localhost:4550/totem/${id}`);
            if(res.status === 200) setTotem(res.data.registers[0] || [{}]);
            console.log(res.data.registers[0])
            setLoading(false);
        }
        getData();
    }, [id]);

    return (
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
                            </>}
                        </div>
                    </div>

                    <div className="totem-information">
                        <div className="totem-identification">
                            <p className="text-bold mb">n° de série: <span className={`text-normal ${status}`}>{serialNumber}</span></p>
                            <p className="text-bold">tempo ativo: <span className={`text-normal ${status}`}>{formatTime(activeTime, status)}</span></p>
                        </div>


                        <Botao  href={`/totem/${id}`}text="+ detalhes" variant={status === 'disable' ? 'btn-disable' : 'primary'} />

                    </div>
        </div >
    )
}

export default withRouter(Totem)
