import React,{useState} from 'react'
import Conversao from './conversao'
import '../css/moedas.css'

export default function Moedas() {

    const [valor,setValor] = useState('')
    const [moeda1,setMoeda1] = useState('Real')
    const [moeda2,setMoeda2] = useState('Dolar')
    
    return(
        <div>
            <div className="Moedas">
                <div className="conversora moeda">
                    <p>Converter de: </p>
                    <select value={moeda1} onChange={(e)=>setMoeda1(e.target.value)}>
                        <option value="Real">Real (BRL)</option>
                        <option value="Dolar">Dolar Americano (USD)</option>
                        <option value="Euro">Euro (EUR)</option>
                        <option value="Libra">Libra Esterlina (GBP)</option>
                    </select>

                    
                </div>

                <div className="convertida moeda">
                    <p>Para: </p>
                    <select value={moeda2} onChange={(e)=>setMoeda2(e.target.value)}>
                        <option value="Real">Real (BRL)</option>
                        <option value="Dolar">Dólar Americano (USD)</option>
                        <option value="Euro">Euro (EUR)</option>                       
                        <option value="Libra">Libra Esterlina (GBP)</option>
                    </select>
                </div>

                <div className="valor">
                    <p>Valor:</p>
                    <input type="number" placeholder="10,00" onChange={(e)=>setValor(e.target.value)}></input>
                </div>

            </div>
            
        <Conversao moeda1={moeda1} moeda2={moeda2} valor={valor}/>
    </div>
    )
}