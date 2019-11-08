import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Line from './pages/Line';
import Teste from './pages/Teste';
import TotemInfo from './pages/TotemInfo';
import TotemRegister from './pages/TotemRegister';

import './style-reset.css'
import './style-all.css'
//componente que será rendenizado na página html
const App = () => (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/line/:id" component={Line}/>
                <Route exact path="/teste" component={Teste}/>
                <Route exact path="/totem/:id" component={TotemInfo}/>
                <Route exact path="/totemregister" component={TotemRegister}/>
                <Route component={() => <div>Pagina não existe</div>}/>
            </Switch>
        </BrowserRouter>
    </div>
)

export default App;
