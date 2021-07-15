import React from 'react'
import Relogio from './logica/relogio'
import '../css/cabecalho.css'

export default function cabecalho(){
    return (
        <div className='cabeçalho'>
            <h1>Conversor Digital de Moedas</h1>            
            <p>Data cotação utilizada: 12/07/2021</p>
            <Relogio />
        </div>
    )
}