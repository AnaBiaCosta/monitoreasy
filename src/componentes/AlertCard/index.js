import React from 'react'
import './style.css'

const AlertCard = () => (
    <div className="alert-body">
        <h2>Histórico de alertas</h2>

        <div className="info-container">
        <div className="circle-container">
            <div>
                <img src="./img/alert.png"></img>
            </div>
        </div>

        <div className="text-container">
            <p>94%</p>
            <p>23/09/20 - 22:23</p>
            <p>Details: line text lorem ipsum </p>
        </div>
    </div>
    </div>
)

export default AlertCard
