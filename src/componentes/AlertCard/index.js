import React from 'react'
import AlertInformation from '../AlertInformation'
import './style.css'


const AlertCard = ({cardName}) => (
    <div className="alert-body">
        <h2>{cardName}</h2>
        <AlertInformation statusColor="alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
    </div>
) 
  
export default AlertCard