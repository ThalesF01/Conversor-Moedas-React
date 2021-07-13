import React from 'react'
import Relogio from './relogio'
import '../css/cabecalho.css'

export default() =>
        <div className='cabeçalho'>
            <h1>Conversor Digital de Moedas</h1>
            <img src="https://image.flaticon.com/icons/png/512/16/16302.png" />
            <p>Feito em base de conversão do dia 06/07/2021</p>
            <Relogio />
        </div>