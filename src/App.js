import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Line from './pages/Line';
import Teste from './pages/Teste';

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
                <Route component={() => <div>Pagina não existe</div>}/>
            </Switch>
        </BrowserRouter>
    </div>
)

export default App;
