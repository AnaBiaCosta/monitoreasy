import React from 'react';

import {Link} from 'react-router-dom';
import Header from '../../componentes/Header'
import Totem from '../../componentes/Totem'
import axios from 'axios';

export default function Station(props){
  const [totems, setTotems] = React.useState([]);
  const [info, setInfo] = React.useState({});
    const { match: { params: {id}}} = props;

  React.useEffect(() => {
      async function getLines(){
          const resStation = await axios.get('http://localhost:4550/stations/view/'+id);
          const res = await axios.get('http://localhost:4550/totems/list/'+id);
          setTotems(res.data.data);
          setInfo(resStation.data.data[0]);
      }
      getLines();
      
  }, [id]);

   React.useEffect(() => console.log('nova info' , info), [info]);

  return <>
      <Header title={"Estação -"} desc={info.name || "Carregando..."} />

      <nav>
            <ul>
                <li><Link to="/">início</Link></li>
                <li>></li>
                <li className="text-bold"><Link to={`/line/${id}`}>{info.name|| "Carregando..."}</Link></li>
            </ul>
        </nav>

      <h2>Totens</h2> 

      <div className="totens-container">
          {totems.length <= 0 && <h2>Carregando...</h2>}
          {totems.map(totem => <Totem id={totem.id} station={info} name={totem.reference}
            serialNumber={totem.serialNumber} timeOperation={totem.timeOperation}
            cpu={totem.cpu} memory={totem.memory} disc={totem.disc} />)}
        </div>
  </>
}
