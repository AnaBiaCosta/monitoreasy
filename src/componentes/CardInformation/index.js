import React from 'react'
import './style.css'

const CardInformation = ({statusColor, percent, dateTime, details}) => (
        <div className="info-container">
            <div className="circle-container">
                <div className={`circle ${statusColor}`}></div>
            </div>

            <div className="text-container">
                <p className="text-bold">{percent}</p>
                <p className="card-text">{dateTime}</p>
                <p className="card-text">Details: {details}</p>
            </div>
        </div>
) 
  
export default CardInformation
