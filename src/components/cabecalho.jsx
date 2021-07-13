import React from 'react'
import Relogio from './relogio'
import '../css/cabecalho.css'

export default function cabecalho(){
    return (
        <div className='cabeçalho'>
            <h1>Conversor Digital de Moedas</h1>
            <p>Feito em base de conversão do dia 06/07/2021</p>
            <Relogio />
        </div>
    )
}