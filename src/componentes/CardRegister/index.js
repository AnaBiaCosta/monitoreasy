import React from 'react'

import CardInformation from '../../componentes/CardInformation'

import './style.css'


const CardRegister = ({cardName}) => (
    <div className="card-body">
        <h2>{cardName}</h2>

        <CardInformation statusColor="danger" percent="95%" dateTime="12/10/19 - 12:33:56" details="line text lorem ipsum "/>
        <CardInformation statusColor="alert" percent="40%" dateTime="12/10/19 - 12:33:56" details="line text lorem ipsum "/>
        <CardInformation statusColor="normal" percent="20%" dateTime="12/10/19 - 12:33:56" details="line text lorem ipsum "/>
    </div>
) 
  
export default CardRegister
