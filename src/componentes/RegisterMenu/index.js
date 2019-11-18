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
                <input type="date" value="2019-11-01"/>
            </div>

            <div>
                <p>Até:</p>
                <input type="date" value="2019-12-01"/>
            </div>
        </div>
    </div>
)

export default RegisterMenu
