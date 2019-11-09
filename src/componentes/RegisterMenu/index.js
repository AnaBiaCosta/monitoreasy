import React from 'react'
import { Link } from 'react-router-dom'



import './style.css'

const RegisterMenu = ({stationId}) => (
    <div class="registro-menu">
        <div class="title-container">
            <h1>Histórico de Registros</h1>

            <div className="btn-container">
                <Link to={`/line/${stationId}`}>voltar</Link>
                <Link to="/">sair</Link>
            </div>
        </div>

        <p>Período de busca</p>

        <div class="search-container">
            <div>
                <p>De:</p>
                <input type="date"></input>
            </div>

            <div>
                <p>Até:</p>
                <input type="date"></input>
            </div>
        </div>
    </div>
)

export default RegisterMenu
