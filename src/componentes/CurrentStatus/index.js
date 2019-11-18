import React from 'react'
import {Link} from 'react-router-dom'

import './style.css' 

const CurrentStatus = ({id, cpu, memory, cpuUnit, memoryUnit}) => (
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
    </div>
    
    <div id="child">
      <div class="percents">
        <p>{cpu}</p>
      </div>
      <div class="percents">
        <p>{memory}</p>
      </div>
    </div>
    
    <div id="child">
      <div class="values">
        <p>{cpuUnit}</p>
      </div>
      <div class="values">
        <p>{memoryUnit}</p>
      </div>
    </div>
    
    <div id="child">
        <Link to={`/history/${id}`}  class="button">
        <p>Histórico de Registros</p>
      </Link>
    </div>
  </div>
</div>
</>
)

export default CurrentStatus
