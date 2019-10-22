import React from 'react';

import {Link} from 'react-router-dom';
import Header from '../../componentes/Header'
import Totem from '../../componentes/Totem'
import axios from 'axios';

//simulação do backend para testes
// const arrTest = [{
//   stateId: 'disable',
//   name: 'STN1',
//   serialNumber: '0129',
//   timeOperation: '12:32:43',
//   cpu: '23%',
//   memory: '67%',
//   disc: '87%'
// },
// {
//   stateId: 'normal',
//   name: 'STN2',
//   serialNumber: '0549',
//   timeOperation: '12:32:43',
//   cpu: '23%',
//   memory: '27%',
//   disc: '57%'

// },
// {
//   stateId: 'disable',
//   name: 'STN3',
//   serialNumber: '0532',
//   timeOperation: '12:32:43',
//   cpu: '43%',
//   memory: '78%',
//   disc: '35%'
// },
// {
//   stateId: 'alert',
//   name: 'STN4',
//   serialNumber: '2341',
//   timeOperation: '12:32:43',
//   cpu: '25%',
//   memory: '63%',
//   disc: '79%'
// },
// {
//   stateId: 'danger',
//   name: 'STN5',
//   serialNumber: '5932',
//   timeOperation: '12:32:43',
//   cpu: '23%',
//   memory: '57%',
//   disc: '98%'
// },
// {
//   stateId: 'danger',
//   name: 'STN6',
//   serialNumber: '3248',
//   timeOperation: '12:32:43',
//   cpu: '34%',
//   memory: '30%',
//   disc: '17%'
// }]


export default function Teste(){
  const [totems, setTotems] = React.useState([]);

  React.useEffect(() => {
      async function getLines(){
          const res = await axios.get('http://localhost:4550/totems/list');
          setTotems(res.data.data);
          console.log(res.data);
      }
      getLines();
      
  }, []);

  return <>
      <Header />

      <nav>
            <ul>
                <li><Link to="/">início</Link></li>
                <li>></li>
                <li className="text-bold"><Link to="/line/3">estação santana</Link></li>
            </ul>
        </nav>

      <h2>Totens</h2> 

      <div className="totens-container">
          {totems.map(totem => <Totem stateId={totem.stationId} name={totem.reference}
            serialNumber={totem.serialNumber} timeOperation={totem.timeOperation}
            cpu={totem.cpu} memory={totem.memory} disc={totem.disc} />)}
        </div>
  </>
}





// export default function Line(){
//   return <>
//       <Header />
//       <Menu />
//       <h2>Totens</h2> 
//       {/* totem com todos os parametros que vem do backend */}
//       <div className="totens-container">
//         {arrTest.map(totem => <Totem stateId={totem.stateId} name={totem.name}
//           serialNumber={totem.serialNumber} timeOperation={totem.timeOperation}
//           cpu={totem.cpu} memory={totem.memory} disc={totem.disc} />)}
//       </div>
//   </>
// }
