import React from 'react'
import AlertInformation from '../AlertInformation'
import './style.css'

const translate = {
    alert: 'Aviso!',
    danger: 'Perigo!',
}

const AlertCard = ({cardName, totem}) => {
    const noNormal = totem.registers.filter(r => r.status != 'normal').slice(0, 16);
    return (
    <div className="alert-body">
        <h2>{cardName}</h2>
        {noNormal.map(register => (
            <AlertInformation statusColor={`bk-${register.status}`} status={translate[register.status]} details={`
            Um alerta foi emitido com as informações de (CPU: ${register.cpu}) e (Memória: ${register.memory})`}/>
        ))}
    </div>
    )
}
  
export default AlertCard
