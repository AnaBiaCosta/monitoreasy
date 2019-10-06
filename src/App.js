import React from 'react';
import Header from './componentes/Header'
import Totem from './componentes/Totem'
import Botao from './componentes/Button'
import Menu from './componentes/Menu'

import './style-reset.css'
import './style-all.css'


const arrTest = [{
  stateId: 'disable',
  name: 'STN1',
  serialNumber: '0129',
  timeOperation: '12:32:43',
  cpu: '23%',
  memory: '67%',
  disc: '87%'
},
{
  stateId: 'normal',
  name: 'STN2',
  serialNumber: '0549',
  timeOperation: '12:32:43',
  cpu: '23%',
  memory: '67%',
  disc: '87%'

},
{
  stateId: 'disable',
  name: 'STN3',
  serialNumber: '0532',
  timeOperation: '12:32:43',
  cpu: '23%',
  memory: '67%',
  disc: '87%'
},
{
  stateId: 'alert',
  name: 'STN4',
  serialNumber: '2341',
  timeOperation: '12:32:43',
  cpu: '23%',
  memory: '67%',
  disc: '87%'
},
{
  stateId: 'danger',
  name: 'STN5',
  serialNumber: '5932',
  timeOperation: '12:32:43',
  cpu: '23%',
  memory: '67%',
  disc: '87%'
},
{
  stateId: 'danger',
  name: 'STN6',
  serialNumber: '3248',
  timeOperation: '12:32:43',
  cpu: '23%',
  memory: '67%',
  disc: '87%'
}]

const App = () => (
  <div className="App">
    <Header />
    <Menu />

    <h2>Totens</h2> 

    <div className="totens-container">
      {arrTest.map(totem => <Totem stateId={totem.stateId} name={totem.name}
        serialNumber={totem.serialNumber} timeOperation={totem.timeOperation}
        cpu={totem.cpu} memory={totem.memory} disc={totem.disc} />)}
    </div>

  </div>
)

export default App;
