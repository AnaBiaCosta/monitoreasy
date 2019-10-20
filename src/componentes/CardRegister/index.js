import React from 'react'
import './style.css'

const CardRegister = ({statusColor, percent, dateTime, details}) => (
    <div className="card-body">
        <h2>CPU</h2>

        <div className="info-container">
            <div className="circle-container">
                <div className="{`circle ${statusColor}`}"></div>
            </div>

            <div className="text-container">
                <p>{percent}</p>
                <p>{dateTime}</p>
                <p>Details: {details}</p>
            </div>
        </div>

        <div className="info-container">
            <div className="circle-container">
                <div className="{`circle ${statusColor}`}"></div>
            </div>

            <div className="text-container">
                <p>{percent}</p>
                <p>{dateTime}</p>
                <p>Details: {details}</p>
            </div>
        </div>


        <div className="info-container">
            <div className="circle-container">
                <div className="{`circle ${statusColor}`}"></div>
            </div>

            <div className="text-container">
                <p>{percent}</p>
                <p>{dateTime}</p>
                <p>Details: {details}</p>
            </div>
        </div>
    </div>
) 
  
export default CardRegister
