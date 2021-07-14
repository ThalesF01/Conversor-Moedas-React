import React from 'react'

export default function conversao(props){

    var resultado = 0
    var conversao1 = 0
    var conversao2 = 0

    function Calculator(){
                            ////* REAL *////

        if (props.moeda1 === 'Real' && props.moeda2 === 'Dolar'){
            conversao1 = 0.19
            conversao2 = 5
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Real' && props.moeda2 === 'Euro'){
            conversao1 = 0.17
            conversao2 = 6
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Real' && props.moeda2 === 'Libra'){
            conversao1 = 0.14
            conversao2 = 7.17
            resultado = props.valor * conversao1
        }

                            ////* DOLAR *////

        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Real'){ 
            conversao1 = 5
            conversao2 = 0.19
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Euro'){ 
            conversao1 = 0.8
            conversao2 = 1.1
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Libra'){ 
            conversao1 = 0.72
            conversao1 = 1.39
            resultado = props.valor * conversao1
        }

                            ////* EURO *////

        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Real'){ 
            conversao1 = 6
            conversao2 = 0.17
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Dolar'){ 
            conversao1 = 1.1
            conversao2 = 0.8
            resultado = props.valor * conversao1 
        }
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Libra'){ 
            conversao1 = 0.85
            conversao2 = 1.17
            resultado = props.valor * conversao1 
        }

                            ////* LIBRA *////

        else if (props.moeda1 === 'Libra' && props.moeda2 === 'Real'){
            conversao1 = 7.17
            conversao2 = 0.14
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Libra' && props.moeda2 === 'Dolar'){
            conversao1 = 1.39
            conversao2 = 0.72
            resultado = props.valor * conversao1
        }
        else if(props.moeda1 === 'Libra' && props.moeda2 === 'Euro'){
            conversao1 = 1.17
            conversao2 = 0.85
            resultado = props.valor * conversao1
        }

        else if(props.moeda1 === props.moeda2){ 
            conversao1 = 1
            resultado = props.valor * conversao1     
        }
    }

    return(
        <>
            {Calculator()}
            {resultado.toFixed(2)}
        </>
    )
}