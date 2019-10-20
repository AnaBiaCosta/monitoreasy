import React from 'react'
import { Link } from 'react-router-dom'



import './style.css'

const RegisterMenu = () => (
    <div class="registro-menu">
        <div class="title-container">
            <h1>histórico de registros</h1>

            <div className="btn-container">
                <a><Link to="/line/:id">voltar</Link></a>
                <a><Link to="/">sair</Link></a>
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
