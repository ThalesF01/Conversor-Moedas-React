import React from 'react'
import Cabeçalho from './components/cabecalho'
import Moedas from './components/moedas'
import './css/app.css'


function App() {
  return (
    <div className='container'>
    <Cabeçalho /> 
    <Moedas />
  </div>
  );
}

export default App;
