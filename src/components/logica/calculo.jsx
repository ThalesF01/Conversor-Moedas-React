import React from 'react'

export default function conversao(props){

    var conversao,r

    function valores(){

                            ////* REAL *////

        if(props.moeda1 === 'Real'){
            if(props.moeda2 === 'Dolar')         conversao = 0.20
            else if(props.moeda2 === 'Euro')     conversao = 0.17
            else if(props.moeda2 === 'Libra')    conversao = 0.14
            else if(props.moeda2 === 'Bitcoin'){
                conversao = 0.0000061
                r = conversao * props.valor
                return r.toLocaleString('pt-BR',{ minimumFractionDigits: 7 })
            }
        }

                            ////* DOLAR *////

        if(props.moeda1 === 'Dolar'){
            if(props.moeda2 === 'Real')          conversao = 5
            else if(props.moeda2 === 'Euro')     conversao = 0.8
            else if(props.moeda2 === 'Libra')    conversao = 0.72
            else if(props.moeda2 === 'Bitcoin'){
                conversao = 0.000031
                r = conversao * props.valor
                return r.toLocaleString('pt-BR',{ minimumFractionDigits: 6 })
            }
        }    
        
                            ////* EURO *////

        if(props.moeda1 === 'Euro'){
            if(props.moeda2 === 'Real')          conversao = 6
            else if(props.moeda2 === 'Dolar')    conversao = 1.1
            else if(props.moeda2 === 'Libra')    conversao = 0.85
            else if(props.moeda2 === 'Bitcoin'){
                conversao = 0.000036
                r = conversao * props.valor
                return r.toLocaleString('pt-BR',{ minimumFractionDigits: 6 })
            }
        }     

                            ////* LIBRA *////

        if(props.moeda1 === 'Libra'){
            if(props.moeda2 === 'Real')          conversao = 7.17
            else if(props.moeda2 === 'Dolar')    conversao = 1.39
            else if(props.moeda2 === 'Euro')     conversao = 1.17
            else if(props.moeda2 === 'Bitcoin'){
                conversao = 0.000043
                r = conversao * props.valor
                return r.toLocaleString('pt-BR',{ minimumFractionDigits: 6 })
            }
        }       

                            ////* BITCOIN *////
        
        if(props.moeda1 === 'Bitcoin'){
            if(props.moeda2 === 'Real')          conversao = 164829.7
            else if(props.moeda2 === 'Dolar')    conversao = 31913.3
            else if(props.moeda2 === 'Euro')     conversao = 27469.36 
            else if(props.moeda2 === 'Libra')    conversao = 23519.88   
        }  
    
                            ////* IGUAIS * ////

        if(props.moeda1 === props.moeda2) return r = props.valor

        r = conversao * props.valor

        return r.toLocaleString('pt-BR',{ minimumFractionDigits: 2 })
    }

    return( <> {valores()} </> )
}