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

function formatTime(time){
    return Math.floor(time / 1000) || 0 + ' min';
}

// pegando os valores enviados pelo backend
const Totem = ({ id, stateId, name, serialNumber, }) => {
    //mensagem exibida enquanto os dados são carregados
    const [state, setState] = React.useState('procurando...')
    const [data, setData] = React.useState({})

    const {activeTime, cpu, memory, disc} = data || {};

    React.useEffect(() => {
        async function getData(){
            const res = await axios.get('http://localhost:4550/totems/data/'+id);
            setData(res.data.data[0]);
            console.log(res.data.data[0]);
        }
        getData();
    }, [id]);

    //seta os valores em 0 caso o totem esteja desabilitado
    if (stateId == 'disable') {
        cpu = '0%'
        memory = '0%'
        disc = '0%'
        activeTime = '00:00:00'
    }

    // a partir do valr do stateId troca as cores dos totens
    React.useEffect(() => {
        setState(stateId)
    }, [stateId])

    return (
        // <div className={`totem-body ${state}`} >
            <div className="totem-body" >
            <div>
                <h3 className="totem-name">{name}</h3>

                <div className="estado-container">
                    <div className={`icon ${state}`}></div>
                    <span className={`text ${state}`}>{dicionario[state]}</span>
                </div>

                <div className="totem-numbers">
                    <p className="text-numbers">CPU: <span className={`number ${state}`}>{cpu}</span></p>
                    <p className="text-numbers">Memória: <span className={`number ${state}`}>{memory}</span></p>
                    <p className="text-numbers">Disco: <span className={`number ${state}`}>{disc}</span></p>
                </div>
            </div>

            <div className="totem-information">
                <div className="totem-identification">
                    <p className="text-bold mb">n° de série: <span className={`text-normal ${state}`}>{serialNumber}</span></p>
                    <p className="text-bold">tempo ativo: <span className={`text-normal ${state}`}>{formatTime(activeTime)}</span></p>
                </div>


                <Botao text="+ detalhes" variant={stateId === 'disable' ? 'btn-disable' : 'primary'} />
            </div>
        </div >
    )
}

export default withRouter(Totem)
