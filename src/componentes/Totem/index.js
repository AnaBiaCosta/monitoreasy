import React from 'react'
import Botao from '../Button'
import './style.css'


const dicionario = {
    disable: 'desabilitado',
    alert: 'ponto de atenção'
}

console.log(dicionario)

const Totem = ({ stateId, name, serialNumber, timeOperation, cpu, memory, disc }) => {
    const [state, setState] = React.useState('procurando...')

    React.useEffect(() => {
        setState(stateId)  
    }, [])

    return (
        <div className="totem-body" >
            <div>
                <h3 className="totem-name">{name}</h3>

                <div className="estado-container">
                    <div className={`icon ${state}`}></div>
                    <span className={state}>{dicionario[state]}</span>
                </div>

                <div className="totem-numbers">
                    <p className="text-numbers">CPU: <span className="number">{cpu}</span></p>
                    <p className="text-numbers">Memória: <span className="number">{memory}</span></p>
                    <p className="text-numbers">Disco: <span className="number">{disc}</span></p>
                </div>
            </div>

            <div className="totem-information">
                <div className="totem-identification">
                    <p className="text-bold mb">n° de série: <span className="text-normal">{serialNumber}</span></p>
                    <p className="text-bold">tempo ativo: <span className="text-normal">{timeOperation}</span></p>
                </div>

                <Botao className="btn" text="+ detalhes" /></div>
        </div >
    )
}

export default Totem