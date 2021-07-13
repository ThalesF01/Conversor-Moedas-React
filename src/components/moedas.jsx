import React,{useState} from 'react'
import Button from './button'
import '../css/moedas.css'

export default function Moedas() {

    const [valor,setValor] = useState('')
    const [moeda1,setMoeda1] = useState('Real')
    const [moeda2,setMoeda2] = useState('Dolar')
    
    return(
        <div>
            <div className="Moedas">
                <div className="conversora moeda">
                    <p>Selecione a moeda e o valor: </p>
                    <select value={moeda1} onChange={(e)=>setMoeda1(e.target.value)}>
                        <option value="Real">R$Real</option>
                        <option value="Dolar">$Dolar</option>
                        <option value="Euro">€Euro</option>
                    </select>

                    <input type="number" placeholder="Valor..." onChange={(e)=>setValor(e.target.value)}></input>
                </div>

                <div className="convertida moeda">
                    <p>Selecione a moeda: </p>
                    <select value={moeda2} onChange={(e)=>setMoeda2(e.target.value)}>
                        <option value="Real">R$Real</option>
                        <option value="Dolar">$Dolar</option>
                        <option value="Euro">€Euro</option>                       
                    </select>
                </div>
            </div>
        <Button moeda1={moeda1} moeda2={moeda2} valor={valor}/>
    </div>
    )
}