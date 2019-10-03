import React from 'react';
import Header from './componentes/Header'
import Totem from './componentes/Totem'
import Botao from './componentes/Button'
import Menu from './componentes/Menu'

import './style-reset.css'
import './style-all.css'




const App = () => (
  <div className="App">
  <Header />
  <Menu />
  <h2>Totens</h2>
  <div className="totens-container">
  <Totem />
  <Totem />
  <Totem />
  <Totem />
  <Totem />
  <Totem />

  </div>
  
</div>
)

export default App;
