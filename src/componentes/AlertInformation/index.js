import React from 'react'
import './style.css'

const AlertInformation = ({statusColor, status, dateTime, details}) => (
        <div className="info-container">
            <div className="circle-container">
                <div className={`circle ${statusColor}`}></div>
            </div>

            <div className="text-container">
                <p className="text-bold">{status}</p>
                <p className="card-text">{dateTime}</p>
                <p className="card-text">Detalhes: {details}</p>
            </div>
        </div>
) 
  
export default AlertInformation
