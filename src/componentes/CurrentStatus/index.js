import React from 'react'
import {Link} from 'react-router-dom'

import './style.css' 

const CurrentStatus = () => (
  <div class="container" id="parent">
  <div id="around">
    <!--primeira linha-->
    <div id="child">
      <div class="titles">
        <p>CPU</p>
      </div>
      <div class="titles">
        <p>MEMÓRIA</p>
      </div>
      <div class="titles">
        <p>DISCO</p>
      </div>
    </div>
    <!--segunda linha-->
    <div id="child">
      <div class="percents">
        <p>7%</p>
      </div>
      <div class="percents">
        <p>77%</p>
      </div>
      <div class="percents">
        <p>0%</p>
      </div>
    </div>
    <!--terceira linha-->
    <div id="child">
      <div class="values">
        <p>0,97 GHz</p>
      </div>
      <div class="values">
        <p>6,1/7,9 GB</p>
      </div>
      <div class="values">
        <p>0 KB/s</p>
      </div>
    </div>
    <!--linha do botao-->
    <div id="child">
      <div class="button">
        <p>Histórico de Registros</p>
      </div>
    </div>
  </div>
</div>
)

export default CurrentStatus