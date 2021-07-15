import React from 'react'
import '../css/conversao.css'
import Calculo from './logica/calculo'
import Conversoes from './logica/conversoes'

export default function button(props){

    var simbolo = '$'

    function Vsimbolo(){
        if (props.moeda2 === 'Real') simbolo = 'R$'
        else if (props.moeda2 === 'Dolar') simbolo = '$'
        else if (props.moeda2 === 'Euro') simbolo = '€'
        else if (props.moeda2 === 'Libra') simbolo = '£'    
        else if (props.moeda2 === 'Bitcoin') simbolo = '₿'       
    }

    return(
        <>
            {Vsimbolo()}
            <h2 className="p-res">Resultado da Conversão :</h2>
            <div className="box">
                <p>Resultado: {simbolo} {<Calculo moeda1={props.moeda1} moeda2={props.moeda2} valor={props.valor}/>}</p>
                <div className="config">
                    <span>Conversao de {props.moeda1} para {props.moeda2}</span>
                    <span>1 {props.moeda1} = {<Conversoes moeda1={props.moeda1} moeda2={props.moeda2}/>} {props.moeda2} </span>
                    <span>1 {props.moeda2} = {<Conversoes moeda1={props.moeda2} moeda2={props.moeda1}/>} {props.moeda1}</span>
                </div>
            </div>  
        </>
    )
}