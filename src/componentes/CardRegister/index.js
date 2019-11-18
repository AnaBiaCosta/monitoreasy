import React from 'react'

import CardInformation from '../../componentes/CardInformation'

import './style.css'

function formatDate(time){
    return new Date(time).toLocaleDateString()
}

const translate = {
    cpu: 'cpu',
    memory: 'memória',
}

const CardRegister = ({cardName, totem, type}) => {

    const three = totem.registers.slice(0, 16);

    return (
        <div className="card-body">
            <h2>{cardName}</h2>

            {three.map( register => (
                <CardInformation 
                    statusColor={`bk-${register.status}`} 
                    percent={`${register[type]} ${register[`${type}Unit`]}`} 
                    dateTime={`${formatDate(register.moment)}`} 
                    details={`Informação de ${translate[type]}`}
                />
            ))}
        </div>
    ) 
}
  
export default CardRegister
