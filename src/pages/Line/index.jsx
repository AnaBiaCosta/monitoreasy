import React from 'react';
import Loading from '../../componentes/Loading';
import {Link} from 'react-router-dom';
import Header from '../../componentes/Header'
import Totem from '../../componentes/Totem'
import axios from 'axios';

export default function Station(props){
    const [info, setInfo] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const { match: { params: {id}}} = props;
    const { name = "Carregando...", totems = [] } = info;
    const { line: {color} = {} } = info;

    React.useEffect(() => {
        async function getLines(){
            const res = await axios.get(`http://apimonitoreasy.herokuapp.com/station/${id}`);
            console.log(res)
            if(res.status === 200) setInfo(res.data);
            setLoading(false)
        }
        getLines();
        setInterval(getLines, 30000);
    }, [id]);

    return <>
        <Header color={color} title={"Estação -"} desc={name} />

        <nav>
              <ul>
                  <li><Link to="/">Início</Link></li>
                  <li>></li>
                  <li className="text-bold"><Link to={`/line/${id}`}>{name}</Link></li>
              </ul>
          </nav>

        <h2>Totens</h2> 

        <div className="totens-container">
              <Loading is={loading}>Carregando totens...</Loading>
              {!loading && totems.length === 0 && <h1> Nenhum totem disponível </h1>}
              {totems.map(totem => <Totem id={totem.id} station={info} name={totem.name}
              serialNumber={totem.serialNumber} timeOperation={totem.timeOperation}
              cpu={totem.cpu} memory={totem.memory} disc={totem.disc} />)}
          </div>
    </>
}
