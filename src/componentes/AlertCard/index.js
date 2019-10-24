import React from 'react'
import AlertInformation from '../AlertInformation'
import './style.css'


const AlertCard = ({cardName}) => (
    <div className="alert-body">
        <h2>{cardName}</h2>
        <AlertInformation statusColor="bk-alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-alert" status="Aviso!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
        <AlertInformation statusColor="bk-danger" status="Erro!" details="Secondary line text lorem ipsum dapibus, neque id cursus faucibus"/>
    </div>
) 
  
export default AlertCard