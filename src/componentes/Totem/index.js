import React from 'react'
import Informacao from '../Totem-Information'
import Botao from '../Button'
import './style.css'

const Totem = () => (
    <div className="totem-body">
        <div className="totem-img"></div>
        <div className="totem-information">
            <Informacao />
            <Botao />
        </div>
    </div>
)

export default Totem