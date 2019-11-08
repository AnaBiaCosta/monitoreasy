import React from 'react'

import './style.css' 

const CurrentStatus = ({cpu, memory, disk}) => (
  <>
  <div class="container" id="parent">
  <div id="around">
    
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
    
    <div id="child">
      <div class="percents">
        <p>{cpu}</p>
      </div>
      <div class="percents">
        <p>{memory}</p>
      </div>
      <div class="percents">
        <p>{disk}</p>
      </div>
    </div>
    
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
    
    <div id="child">
      <div class="button">
        <p>Histórico de Registros</p>
      </div>
    </div>
  </div>
</div>
</>
)

export default CurrentStatus
