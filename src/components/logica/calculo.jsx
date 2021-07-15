import React from 'react'

export default function conversao(props){

    var conversao
    var r

    function valores(){
        if (props.moeda1 === 'Real' && props.moeda2 === 'Dolar')      conversao = 0.20
        else if(props.moeda1 === 'Real' && props.moeda2 === 'Euro')   conversao = 0.17
        else if(props.moeda1 === 'Real' && props.moeda2 === 'Libra')  conversao = 0.14            
        else if(props.moeda1 === 'Real' && props.moeda2 === 'Bitcoin')  conversao = 0.0000061            

                            ////* DOLAR *////

        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Real')   conversao = 5            
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Euro')   conversao = 0.8        
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Libra')   conversao = 0.72                    
        else if(props.moeda1 === 'Dolar' && props.moeda2 === 'Bitcoin')   conversao = 0.000031           
        
                            ////* EURO *////

        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Real')   conversao = 6            
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Dolar')   conversao = 1.1         
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Libra')   conversao = 0.85         
        else if(props.moeda1 === 'Euro' && props.moeda2 === 'Bitcoin')   conversao = 0.000036 

                            ////* LIBRA *////

        else if (props.moeda1 === 'Libra' && props.moeda2 === 'Real')  conversao = 7.17            
        else if(props.moeda1 === 'Libra' && props.moeda2 === 'Dolar')  conversao = 1.39    
        else if(props.moeda1 === 'Libra' && props.moeda2 === 'Euro')  conversao = 1.17            
        else if(props.moeda1 === 'Libra' && props.moeda2 === 'Bitcoin')  conversao = 0.000043    

                            ////* BITCOIN *////
        
        else if (props.moeda1 === 'Bitcoin' && props.moeda2 === 'Real')  conversao = 164829.7
        else if (props.moeda1 === 'Bitcoin' && props.moeda2 === 'Dolar')  conversao = 32542.20        
        else if (props.moeda1 === 'Bitcoin' && props.moeda2 === 'Euro')  conversao = 27469.36        
        else if (props.moeda1 === 'Bitcoin' && props.moeda2 === 'Libra')  conversao = 23519.88
    
                            ////* IGUAIS * ////

        else if(props.moeda1 === props.moeda2) conversao = 1

        r = conversao * props.valor
    }

    return(
        <>
            {valores()}
            {r.toLocaleString('pt-BR',{ minimumFractionDigits: 7 })}
        </>
    )
}