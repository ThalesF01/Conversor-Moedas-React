import React from 'react'
import '../css/button.css'

export default function button(props){

    var resultado = 0

    function Calculator(){
        if (props.moeda1 === 'Real' && props.moeda2 === 'Dolar')  resultado = props.valor * 0.20
        else if(props.moeda1 === 'Real' && props.moeda2 === 'Euro') resultado = props.valor * 0.17
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Real') resultado = props.valor * 5.09
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Euro') resultado = props.valor * 0.84
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Real') resultado = props.valor * 6.05
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Dolar') resultado = props.valor * 1.19    
    }

    return(
        <div className='res'>
            {Calculator()}
            <p>Conversão: {resultado.toFixed(2)}</p>
        </div>
    )
}