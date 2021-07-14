import React from 'react'
import '../css/conversao.css'
import Conversao from './conversao'

export default function button(props){

    return(
        <>
            <h2 className="p-res">Resultado da Conversão :</h2>
            <div className="box">
                <p>Resultado: {<Conversao moeda1={props.moeda1} moeda2={props.moeda2} valor={props.valor}/>}</p>
                <div className="config">
                    <span>Conversao de {props.moeda1} para {props.moeda2}</span>
                    <span>1 {props.moeda1} = {props.moeda2} </span>
                    <span>1 {props.moeda2} = {props.moeda1}</span>
                </div>
            </div>  
        </>
    )
}