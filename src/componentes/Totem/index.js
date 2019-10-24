import React from 'react'
import Botao from '../Button'
import './style.css'


// Dicionário construído para trocar o status do totem
const dicionario = {
    disable: 'desabilitado',
    alert: 'ponto de atenção',
    danger: 'operação crítica',
    normal: 'operação normal'
}


// pegando os valores enviados pelo backend
const Totem = ({ stateId, name, serialNumber, timeOperation, cpu, memory, disc }) => {
    //mensagem exibida enquanto os dados são carregados
    const [state, setState] = React.useState('procurando...')


    //seta os valores em 0 caso o totem esteja desabilitado
    if (stateId == 'disable') {
        cpu = '0%'
        memory = '0%'
        disc = '0%'
        timeOperation = '00:00:00'
    }



    // a partir do valr do stateId troca as cores dos totens
    React.useEffect(() => {
        setState(stateId)
    }, [])

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
                    <p className="text-bold">tempo ativo: <span className={`text-normal ${state}`}>{timeOperation}</span></p>
                </div>


                <Botao text="+ detalhes" variant={stateId === 'disable' ? 'btn-disable' : 'primary'} />
            </div>
        </div >
    )
}

export default Totem